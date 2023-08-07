import { User } from "../db/Entities";
import { FireStoreUser } from "../db/Firebase/Firestore/User";

export const mergeUsers = (sqlUser: User[], firestoreUser: FireStoreUser[]) => {
  return sqlUser.map((obj1) => {
    const obj2 = firestoreUser.find((obj2) => obj1.userId === obj2.userId);
    return { ...obj1, ...obj2 };
  });
};
