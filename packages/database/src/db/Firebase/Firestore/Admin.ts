import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "../config";

const document = "admins";

export const existsRecord = async (adminId: string) => {
  const docRef = doc(db, document, adminId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const createAdmin = async (userId: string) => {
  await setDoc(doc(db, document, `${userId}`), { adminId: userId });
};
