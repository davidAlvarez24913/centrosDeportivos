import {
  DocumentData,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { db } from "../config";

type RangeHour = {
  startHour: String;
  endHour: String;
  price: number;
};
export type Disponibility = {
  Monday: RangeHour[];
  Tuesday: RangeHour[];
  Wednesday: RangeHour[];
  Thursday: RangeHour[];
  Friday: RangeHour[];
  Saturday: RangeHour[];
  Sunday: RangeHour[];
};
export type FireStoreService = {
  serviceId: number;
  image: string;
  disponibility?: Disponibility;
};
const document = "services";

export const listServices = async () => {
  const serviceSnapShot = await getDocs(collection(db, document));
  return serviceSnapShot.docs
    .map((service) => service.data())
    .map((item) => {
      return {
        ...item,
        image: item.image !== "" ? item.image!.split("#")[1] : item.image,
      };
    });
};
export const findService = async (serviceId: string) => {
  const docRef = doc(db, document, serviceId);
  const docSnap = (await getDoc(docRef)).data();
  const result = {
    ...docSnap,
    image:
      docSnap?.image !== "" ? docSnap?.image!.split("#")[1] : docSnap.image,
  };
  return result as DocumentData | undefined;
};
export const createFirestoreService = async (service: FireStoreService) =>
  await setDoc(doc(db, document, `${service.serviceId}`), service);

export const updateFirestoreService = async (service: FireStoreService) => {
  const docRef = doc(db, document, `${service.serviceId}`);
  await updateDoc(docRef, service);
};

export const deleteFirestoreService = async (serviceId: string) =>
  await deleteDoc(doc(db, document, serviceId));
