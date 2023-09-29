import { SportCenter, Service } from "../../db/TypeOrm/Entities";
import { createFirestoreService } from "../../db/Firebase/Firestore/Service";
import { GraphQLError } from "graphql";
import { schedule } from "../utils";
import { uploadFile } from "../../db/Firebase/Bucket";
const CreateServiceResolver = async (root: any, { input }: any) => {
  //validation sportCenetr id exists!
  const sportCenter = await SportCenter.findOneBy({
    sportCenterId: input.sportCenterId,
  });
  let serviceId;
  const { image, disponibility, ...dataSQL } = input;
  if (sportCenter) {
    try {
      const result = await Service.insert({
        ...dataSQL,
        sportCenter: dataSQL.sportCenterId,
      });
      serviceId = result.identifiers[0].serviceId;

      // upload image
      const auxNameImage = "services/" + input.sportCenterId + "-" + serviceId;
      if (input.image !== "") {
        console.log("here");
        const imageUrl = await uploadFile(input.image, auxNameImage);
        console.log(imageUrl);

        await createFirestoreService({
          serviceId,
          image: auxNameImage + "#" + imageUrl,
        });
      } else {
        await createFirestoreService({
          serviceId,
          image: "",
        });
      }

      // insert firestore
      return {
        ...input,
        image: input.image === "" ? "" : auxNameImage,
        serviceId,
      };
    } catch (error) {
      await Service.delete({ serviceId: Number(serviceId) });

      throw new GraphQLError(
        `No se pudo crear el servicio ${JSON.stringify(error)}`,
        {
          extensions: {
            code: "ERROR_CREATE_SERVICE",
            argumentName: "error",
          },
        }
      );
    }
  }
};

export default CreateServiceResolver;
