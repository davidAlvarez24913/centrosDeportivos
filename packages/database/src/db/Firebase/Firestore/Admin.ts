import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config";

const document = "admins";

export const existsRecord = async (adminId: string) => {
  const docRef = doc(db, document, adminId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
