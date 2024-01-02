import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../config";

export type FireStoreUser = {
  userId: string;
  image: string;
};
const document = "users";

export const listUsers = async () => {
  const usersSnapShot = await getDocs(collection(db, document));
  return usersSnapShot.docs.map((user) => user.data());
};
export const findUser = async (userId: string) => {
  const docRef = doc(db, document, userId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
export const createUser = async (user: FireStoreUser) =>
  await setDoc(doc(db, document, `${user.userId}`), { image: user.image });

export const updateUser = async (user: FireStoreUser) => {
  const docRef = doc(db, document, `${user.userId}`);
  await updateDoc(docRef, user);
};

export const deleteUser = async (userId: string) =>
  await deleteDoc(doc(db, document, userId));
