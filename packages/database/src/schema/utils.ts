import { Service, SportCenter, User } from "../db/Entities";
import { FireStoreService } from "../db/Firebase/Firestore/Service";
import { FireStoreSportCenter } from "../db/Firebase/Firestore/SportCenter";
import { FireStoreUser } from "../db/Firebase/Firestore/User";

export const mergeUsers = (sqlUser: User[], firestoreUser: FireStoreUser[]) => {
  return sqlUser.map((obj1) => {
    const obj2 = firestoreUser.find((obj2) => obj1.userId === obj2.userId);
    return { ...obj1, ...obj2 };
  });
};

export const mergeSportCenter = (
  sqlSportCenter: SportCenter[],
  firestoreSportCenter: FireStoreSportCenter[]
) => {
  return sqlSportCenter.map((obj1) => {
    const obj2 = firestoreSportCenter.find(
      (obj2) => obj1.sportCenterId == obj2.sportCenterId
    );
    return { ...obj1, calification: obj2?.calification, images: obj2?.images };
  });
};

export const mergeServices = (
  sqlServices: Service[],
  firestoreService: FireStoreService[]
) => {
  return sqlServices.map((obj1) => {
    const obj2 = firestoreService.find(
      (obj2) => obj1.serviceId == obj2.serviceId
    );
    return { ...obj1, calification: obj2?.calification, image: obj2?.image };
  });
};
