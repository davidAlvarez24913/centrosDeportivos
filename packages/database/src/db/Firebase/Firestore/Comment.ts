import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore/lite";
import { db } from "../config";

export type Comment = {
  commentId: string;
  sportCenterId?: number;
  serviceId?: number;
  userId: number;
  comment: string;
};
const document = "comments";

export const createComment = async (comment: Comment) => {
  const snapComment = await addDoc(collection(db, document), comment);
  return { ...comment, commentId: snapComment.id };
};

export const deleteComment = async (commentId: string) =>
  await deleteDoc(doc(db, document, commentId));

export const allComments = async () => {
  const snapComments = await getDocs(collection(db, document));
  return snapComments.docs.map((comment) => {
    return { ...comment.data(), commentId: comment.id };
  });
};
