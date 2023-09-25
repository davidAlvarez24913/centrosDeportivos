import { userResolvers } from "./User/userResolvers";
import { serviceResolvers } from "./Service/serviceResolvers";
import { sportCenterResolvers } from "./SportCenter/sportCenterResolvers";
import { reservationResolvers } from "./Reservation/reservationResolver";
import { commentResolvers } from "./Comment/CommentResolver";
import { bankAccountResolvers } from "./BankAccount/BankAccountResolvers";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...serviceResolvers.Query,
    ...sportCenterResolvers.Query,
    ...reservationResolvers.Query,
    ...commentResolvers.Query,
    ...bankAccountResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...serviceResolvers.Mutation,
    ...sportCenterResolvers.Mutation,
    ...reservationResolvers.Mutation,
    ...commentResolvers.Mutation,
    ...bankAccountResolvers.Mutation,
  },
};
export default resolvers;
