import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhNAwVq1g53bJF-NLvYAnKsHzDQQP3XMM",
  authDomain: "reservastastas-edf73.firebaseapp.com",
  projectId: "reservastastas-edf73",
  storageBucket: "reservastastas-edf73.appspot.com",
  messagingSenderId: "5560844656",
  appId: "1:5560844656:web:4b66e1893a6773f048cfb5",
  measurementId: "G-ZG7EBLX7JZ",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
const auth = getAuth(app);
export default auth;
