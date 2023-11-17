import {
  collection,
  getDocs,
  addDoc,
  where,
  query,
  DocumentData,
} from "firebase/firestore/lite";
import { db } from "../config";

type RangeHour = {
  startHour: String;
  endHour: String;
  price: number;
};
export type UnreservedHours = {
  date: string;
  serviceId: string;
  unreservedHours: RangeHour[];
};
const document = "disponibility";

export const createRecordDisponibility = async (disp: UnreservedHours) => {
  await addDoc(collection(db, document), disp);
  return { ...disp };
};

export const listDaysWithUnreservedHours = async (date: string) => {
  const refDisponibility = collection(db, document);

  // Create a query against the collection.
  const q = query(refDisponibility, where("date", "==", date));
  const data: DocumentData[] = [];
  const docs = await getDocs(q);
  docs.forEach((item) => {
    data.push(item.data());
  });
  return data;
};
