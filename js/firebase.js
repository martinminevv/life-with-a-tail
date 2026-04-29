// ─── Firebase Service Imports ─────────────────────────────────
import { db, storage, auth } from './server.js';

import {
  collection, doc, addDoc, setDoc, getDoc, getDocs,
  updateDoc, deleteDoc, query, where, orderBy,
  serverTimestamp
} from "firebase/firestore";

import {
  ref, uploadBytes, getDownloadURL
} from "firebase/storage";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";

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

export async function signup(name, email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await setDoc(doc(db, 'users', cred.user.uid), {
    name, email, phone: '', address: '', role: 'user',
    created_at: serverTimestamp()
  });
  return cred.user;
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}

export async function getMe() {
  const user = auth.currentUser;
  if (!user) return null;
  const snap = await getDoc(doc(db, 'users', user.uid));
  return snap.exists() ? { uid: user.uid, ...snap.data() } : null;
}

export function onAuthChange(callback) {
  onAuthStateChanged(auth, callback);
}

// ─── PROFILE ──────────────────────────────────────────────────

export async function getProfile() {
  const uid = currentUID();
  const snap = await getDoc(doc(db, 'users', uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

export async function updateProfile_(name, phone, address) {
  const uid = currentUID();
  await updateDoc(doc(db, 'users', uid), { name, phone, address });
  await updateProfile(auth.currentUser, { displayName: name });
}

// ─── ANIMALS ──────────────────────────────────────────────────

export async function getAnimals() {
  const q = query(collection(db, 'animals'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

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

export async function updateAnimal(id, data, imageFile) {
  const imageURL = imageFile ? await uploadImage(imageFile) : (data.image || '');
  await updateDoc(doc(db, 'animals', id), {
    name: data.name, breed: data.breed, age: data.age,
    gender: data.gender, species: data.species || 'dog',
    description: data.description, image: imageURL
  });
}

export async function deleteAnimal(id) {
  await deleteDoc(doc(db, 'animals', id));
}

// ─── FAVORITES ────────────────────────────────────────────────

export async function getFavoriteIds() {
  const uid = currentUID();
  const snap = await getDocs(collection(db, 'users', uid, 'favorites'));
  return snap.docs.map(d => d.id);
}

export async function getFavorites() {
  const uid = currentUID();
  const q = query(collection(db, 'users', uid, 'favorites'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addFavorite(animal) {
  const uid = currentUID();
  await setDoc(doc(db, 'users', uid, 'favorites', animal.id), {
    ...animal, created_at: serverTimestamp()
  });
}

export async function removeFavorite(animalId) {
  const uid = currentUID();
  await deleteDoc(doc(db, 'users', uid, 'favorites', animalId));
}

// ─── APPLICATIONS ─────────────────────────────────────────────

export async function submitApplication(animalId, message) {
  const uid = currentUID();
  const existingSnap = await getDocs(query(
    collection(db, 'applications'),
    where('user_id', '==', uid),
    where('animal_id', '==', animalId)
  ));
  const hasDuplicate = existingSnap.docs.some(d => {
    const s = d.data().status;
    return s === 'pending' || s === 'reviewing';
  });
  if (hasDuplicate) throw new Error('You already have an active application for this pet');
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

export async function getMyApplications() {
  const uid = currentUID();
  const q = query(
    collection(db, 'applications'),
    where('user_id', '==', uid)
  );
  const snap = await getDocs(q);
  const apps = snap.docs.map(d => {
    const data = d.data();
    return {
      id: d.id,
      ...data,
      animal_name:  data.animal_name  || data.animal_id,
      breed:        data.animal_breed || data.breed || '',
      image:        data.animal_image || data.image || ''
    };
  });
  apps.sort((a, b) => {
    const aTime = a.created_at?.toMillis ? a.created_at.toMillis() : 0;
    const bTime = b.created_at?.toMillis ? b.created_at.toMillis() : 0;
    return bTime - aTime;
  });
  return apps;
}

export async function getAllApplications() {
  const q = query(collection(db, 'applications'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function updateApplicationStatus(id, status) {
  await updateDoc(doc(db, 'applications', id), { status });
}

export async function deleteApplication(id) {
  await deleteDoc(doc(db, 'applications', id));
}

// ─── MESSAGES ─────────────────────────────────────────────────

export async function submitMessage(name, email, phone, subject, message) {
  if (!name || !email || !message) throw new Error('Name, email and message are required');
  return await addDoc(collection(db, 'messages'), {
    name, email, phone: phone || '', subject: subject || '',
    message, is_read: false, created_at: serverTimestamp()
  });
}

export async function getAllMessages() {
  const q = query(collection(db, 'messages'), orderBy('created_at', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function markMessageRead(id) {
  await updateDoc(doc(db, 'messages', id), { is_read: true });
}

export async function deleteMessage(id) {
  await deleteDoc(doc(db, 'messages', id));
}