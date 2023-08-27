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

export type FireStoreReservation = {
  reservationId: string;
  paymentPhoto?: string;
  timeReservation: string; //range and date
};
const document = "reservations";

export const listReservations = async () => {
  const reservationSnapShot = await getDocs(collection(db, document));
  return reservationSnapShot.docs.map((reservation) => reservation.data());
};
export const findReservation = async (reservationId: string) => {
  const docRef = doc(db, document, reservationId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};
export const createFirestoreReservation = async (
  reservation: FireStoreReservation
) =>
  await setDoc(doc(db, document, `${reservation.reservationId}`), reservation);

export const updateFirestoreReservation = async (
  reservation: FireStoreReservation
) => {
  const docRef = doc(db, document, `${reservation.reservationId}`);
  await updateDoc(docRef, reservation);
};

export const deleteFirestoreReservation = async (reservationId: string) =>
  await deleteDoc(doc(db, document, reservationId));
