import { SportCenter } from "../../db/Entities";
import { GraphQLError } from "graphql";

import {
  Comment,
  allComments,
  createComment,
  deleteComment,
} from "../../db/Firebase/Firestore/Comment";
import { sportCenterResolvers } from "../SportCenter/sportCenterResolvers";

export const commentResolvers = {
  Query: {
    listCommentsByService: async (root: any, { ...input }: any) => {
      const comments = (await allComments()) as Comment[];
      return comments.filter(
        (comment) =>
          comment.serviceId === input.serviceId &&
          comment.serviceId !== undefined &&
          comment.sportCenterId === input.sportCenterId &&
          comment.sportCenterId !== undefined
      );
    },
    listCommentsBySportCenter: async (root: any, { ...input }: any) => {
      const comments = (await allComments()) as Comment[];
      return comments.filter(
        (comment) =>
          comment.sportCenterId === input.sportCenterId &&
          comment.serviceId !== undefined
      );
    },
    allComments: async () => {
      const comments = (await allComments()) as Comment[];
      return comments;
    },
  },
  Mutation: {
    createComment: async (root: any, { input }: any) => {
      const errorCreateCommet = () => {
        throw new GraphQLError(
          "No existe el centro deportivo/servicio ,verifica el id",
          {
            extensions: {
              code: "SERVICE_OR_SPORTCENTER_NOT_EXISTS",
              argumentName: "errorId",
            },
          }
        );
      };
      //validation ids exits of service on sportcenter
      const { sportCenterId, serviceId } = input;
      try {
        const listSP = await sportCenterResolvers.Query.listSportCenters();
        const flagSP = listSP.filter(
          (sp) => sp.sportCenterId === sportCenterId
        );
        const listService = flagSP[0].services.filter(
          (service) => service.serviceId === Number(serviceId)
        );
        const flagCommetService = listService.length >= 1;
        if (serviceId === undefined) {
          const commentInput = await createComment({ ...input });
          return commentInput;
        } else {
          if (flagCommetService) {
            const commentInput = await createComment({ ...input });
            return commentInput;
          } else {
            errorCreateCommet();
          }
        }
      } catch (error) {
        errorCreateCommet();
      }
    },
    deleteComment: async (root: any, { ...input }: any) => {
      try {
        await deleteComment(input.id);
        return {
          status: "Ok",
          message: "Comentario eliminado exitosamente!",
        };
      } catch (error) {
        return {
          status: "Failed",
          message: "No se pudo eliminar el comentario",
        };
      }
    },
  },
};
