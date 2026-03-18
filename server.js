import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC4PJpWMeNvAbWrtBuWOK711U8B5Rfx9o",
  authDomain: "life-with-a-tail.firebaseapp.com",
  databaseURL: "https://life-with-a-tail-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "life-with-a-tail",
  storageBucket: "life-with-a-tail.firebasestorage.app",
  messagingSenderId: "906267126282",
  appId: "1:906267126282:web:f03fd5c93a2bbaa31e8df3",
  measurementId: "G-5VSZFKBNRZ"
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

