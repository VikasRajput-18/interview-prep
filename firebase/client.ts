import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_o-_fJsiavfWuHw5FNXSrIFnh9RU5vgs",
  authDomain: "prep-ai-7bd26.firebaseapp.com",
  projectId: "prep-ai-7bd26",
  storageBucket: "prep-ai-7bd26.firebasestorage.app",
  messagingSenderId: "112379694159",
  appId: "1:112379694159:web:a34fd8a53a6e3e2a8e2e3a",
  measurementId: "G-QD151NP4SY",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();
