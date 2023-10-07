import { userResolvers } from "./User/userResolvers";
import { serviceResolvers } from "./Service/serviceResolvers";
import { sportCenterResolvers } from "./SportCenter/sportCenterResolvers";
import { reservationResolvers } from "./Reservation/reservationResolver";
import { reviewResolvers } from "./Review/ReviewResolver";
import { bankAccountResolvers } from "./BankAccount/BankAccountResolvers";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...sportCenterResolvers.Query,
    ...reservationResolvers.Query,
    ...reviewResolvers.Query,
    ...bankAccountResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...sportCenterResolvers.Mutation,
    ...reservationResolvers.Mutation,
    ...reviewResolvers.Mutation,
    ...bankAccountResolvers.Mutation,
  },
};
export default resolvers;
