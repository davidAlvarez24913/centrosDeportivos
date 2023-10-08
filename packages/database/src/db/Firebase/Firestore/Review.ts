import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { db } from "../config";

export type Review = {
  reviewId: string;
  reservationId: number;
  sportCenterId: number;
  userId: number;
  review: string;
  rankign: number;
};
const document = "reviews";

export const createReview = async (review: Review) => {
  const snapReview = await addDoc(collection(db, document), review);
  return { ...review, reviewId: snapReview.id };
};

export const getReviewsBySportCenter = async (sportCenterId: string) => {
  const q = query(
    collection(db, document),
    where("sportCenterId", "==", sportCenterId)
  );
  const snapReviews = await getDocs(q);
  return snapReviews.docs.map((review) => {
    return { ...review.data(), reviewId: review.id };
  });
};
export const reservationReviewed = async (reservationId: string) => {
  const q = query(
    collection(db, document),
    where("reservationId", "==", reservationId)
  );
  const snapReviews = await getDocs(q);
  return snapReviews.docs.map((review) => {
    return { ...review.data() };
  });
};
