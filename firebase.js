// ============================================================
//  firebase.js  –  single file replacing the entire server.js
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// ─── Init ────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCC4PJpWMeNvAbWrtBuWOK711U8B5Rfx9o",
  authDomain: "life-with-a-tail.firebaseapp.com",
  databaseURL: "https://life-with-a-tail-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "life-with-a-tail",
  storageBucket: "life-with-a-tail.firebasestorage.app",
  messagingSenderId: "906267126282",
  appId: "1:906267126282:web:f03fd5c93a2bbaa31e8df3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
export const storage = getStorage(app);

// ─── Helpers ─────────────────────────────────────────────────
function currentUID() {
  const u = auth.currentUser;
  if (!u) throw new Error('Not logged in');
  return u.uid;
}

async function uploadImage(file) {
  const storageRef = ref(storage, `animals/${Date.now()}-${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

// ─── AUTH ─────────────────────────────────────────────────────

// Replaces POST /api/signup
export async function signup(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, email, phone: '', address: '', role: 'user',
    created_at: serverTimestamp()
  });
  return cred.user;
}

// Replaces POST /api/login
export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// Replaces POST /api/logout
export async function logout() {
  await signOut(auth);
}

// Replaces GET /api/me
export async function getMe() {
  const user = auth.currentUser;
  if (!user) return null;
  const snap = await getDoc(doc(db, 'users', user.uid));
  return snap.exists() ? { uid: user.uid, ...snap.data() } : null;
}

// Listen for auth state changes (use on every page)
export function onAuthChange(callback) {
  onAuthStateChanged(auth, callback);
}

// ─── PROFILE ──────────────────────────────────────────────────

// Replaces GET /api/profile
export async function getProfile() {
  const uid = currentUID();
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

// Replaces PUT /api/profile
export async function updateProfile_(name, phone, address) {
  const uid = currentUID();
  await updateDoc(doc(db, 'users', uid), { name, phone, address });
  await updateProfile(auth.currentUser, { displayName: name });
}

// ─── ANIMALS ──────────────────────────────────────────────────

// Replaces GET /api/animals
export async function getAnimals() {
  const q = query(collection(db, 'animals'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Replaces POST /api/animals  (admin only)
export async function addAnimal(data, imageFile) {
  const imageURL = imageFile ? await uploadImage(imageFile) : (data.image || '');
  const docRef = await addDoc(collection(db, 'animals'), {
    name: data.name, breed: data.breed, age: data.age,
    gender: data.gender, species: data.species || 'dog',
    description: data.description, image: imageURL,
    created_at: serverTimestamp()
  });
  return docRef.id;
}

// Replaces PUT /api/animals/:id  (admin only)
export async function updateAnimal(id, data, imageFile) {
  const imageURL = imageFile ? await uploadImage(imageFile) : (data.image || '');
  await updateDoc(doc(db, 'animals', id), {
    name: data.name, breed: data.breed, age: data.age,
    gender: data.gender, species: data.species || 'dog',
    description: data.description, image: imageURL
  });
}

// Replaces DELETE /api/animals/:id  (admin only)
export async function deleteAnimal(id) {
  await deleteDoc(doc(db, 'animals', id));
}

// ─── FAVORITES ────────────────────────────────────────────────

// Replaces GET /api/favorites/ids
export async function getFavoriteIds() {
  const uid = currentUID();
  const snap = await getDocs(collection(db, 'users', uid, 'favorites'));
  return snap.docs.map(d => d.id);
}

// Replaces GET /api/favorites
export async function getFavorites() {
  const uid = currentUID();
  const q = query(collection(db, 'users', uid, 'favorites'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Replaces POST /api/favorites/:animalId
export async function addFavorite(animal) {
  const uid = currentUID();
  await setDoc(doc(db, 'users', uid, 'favorites', animal.id), {
    ...animal, created_at: serverTimestamp()
  });
}

// Replaces DELETE /api/favorites/:animalId
export async function removeFavorite(animalId) {
  const uid = currentUID();
  await deleteDoc(doc(db, 'users', uid, 'favorites', animalId));
}

// ─── APPLICATIONS ─────────────────────────────────────────────

// Replaces POST /api/applications
export async function submitApplication(animalId, message) {
  const uid = currentUID();
  const duplicate = await getDocs(query(
    collection(db, 'applications'),
    where('user_id', '==', uid),
    where('animal_id', '==', animalId),
    where('status', 'in', ['pending', 'reviewing'])
  ));
  if (!duplicate.empty) throw new Error('You already have an active application for this pet');
  const [animalSnap, userSnap] = await Promise.all([
    getDoc(doc(db, 'animals', animalId)),
    getDoc(doc(db, 'users', uid))
  ]);
  const animal = animalSnap.data() || {};
  const user   = userSnap.data()   || {};
  return await addDoc(collection(db, 'applications'), {
    user_id:      uid,
    animal_id:    animalId,
    animal_name:  animal.name  || 'N/A',
    animal_breed: animal.breed || '',
    animal_image: animal.image || '',
    user_name:    user.name    || 'N/A',
    user_email:   user.email   || 'N/A',
    user_phone:   user.phone   || '',
    message:      message || '',
    status:       'pending',
    created_at:   serverTimestamp()
  });
}

// Replaces GET /api/applications  (own applications)
export async function getMyApplications() {
  const uid = currentUID();
  const q = query(
    collection(db, 'applications'),
    where('user_id', '==', uid),
    orderBy('created_at', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => {
    const data = d.data();
    return {
      id: d.id,
      ...data,
      // fallbacks so profile page always has something to display
      animal_name:  data.animal_name  || data.animal_id,
      breed:        data.animal_breed || '',
      image:        data.animal_image || ''
    };
  });
}

// Replaces GET /api/admin/applications  (admin only)
export async function getAllApplications() {
  const q = query(collection(db, 'applications'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Replaces PUT /api/admin/applications/:id  (admin only)
export async function updateApplicationStatus(id, status) {
  await updateDoc(doc(db, 'applications', id), { status });
}

// Replaces DELETE /api/admin/applications/:id  (admin only)
export async function deleteApplication(id) {
  await deleteDoc(doc(db, 'applications', id));
}

// ─── MESSAGES ─────────────────────────────────────────────────

// Replaces POST /api/messages  (public)
export async function submitMessage(name, email, phone, subject, message) {
  if (!name || !email || !message) throw new Error('Name, email and message are required');
  return await addDoc(collection(db, 'messages'), {
    name, email, phone: phone || '', subject: subject || '',
    message, is_read: false, created_at: serverTimestamp()
  });
}

// Replaces GET /api/admin/messages  (admin only)
export async function getAllMessages() {
  const q = query(collection(db, 'messages'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Replaces PUT /api/admin/messages/:id/read  (admin only)
export async function markMessageRead(id) {
  await updateDoc(doc(db, 'messages', id), { is_read: true });
}

// Replaces DELETE /api/admin/messages/:id  (admin only)
export async function deleteMessage(id) {
  await deleteDoc(doc(db, 'messages', id));
}