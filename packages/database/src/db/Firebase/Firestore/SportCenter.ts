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

export type FireStoreSportCenter = {
  sportCenterId: string;
  image?: string;
  ranking?: number;
};
const document = "sportscenter";

export const listSportCenters = async () => {
  const sportCenterSnapShot = await getDocs(collection(db, document));
  const result = sportCenterSnapShot.docs
    .map((sc) => sc.data())
    .map((item) => {
      return {
        ...item,
        image: item.image !== "" ? item.image!.split("#")[1] : item.image,
      };
    });
  return result;
};
export const findSportCenter = async (sportCenterId: string) => {
  const docRef = doc(db, document, sportCenterId);
  const docSnap = (await getDoc(docRef)).data();
  const result = {
    ...docSnap,
    image:
      docSnap?.image !== "" ? docSnap?.image!.split("#")[1] : docSnap.image,
  };
  return result as DocumentData | undefined;
};
export const createFirestoreSportCenter = async (sc: FireStoreSportCenter) =>
  await setDoc(doc(db, document, `${sc.sportCenterId}`), sc);

export const updateFirestoreSportCenter = async (sc: FireStoreSportCenter) => {
  const docRef = doc(db, document, `${sc.sportCenterId}`);
  await updateDoc(docRef, sc);
};

export const deleteFirestoreSportCenter = async (sportCenterId: string) =>
  await deleteDoc(doc(db, document, sportCenterId));
