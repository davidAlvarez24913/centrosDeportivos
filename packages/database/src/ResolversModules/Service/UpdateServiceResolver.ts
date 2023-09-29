import { Service } from "../../db/TypeOrm/Entities";
import {
  Disponibility,
  findService,
  updateFirestoreService,
} from "../../db/Firebase/Firestore/Service";
import { deleteImage, uploadFile } from "../../db/Firebase/Bucket";
const UpdateServiceResolver = async (root: any, { input }: any) => {
  try {
    const currentServiceSQL = await Service.findOneBy({
      serviceId: input.serviceId,
    });
    const currentServiceNoSQL = await findService(input.serviceId);

    const auxNameImage =
      "services/" + input.sportCenterId + "-" + currentServiceSQL?.serviceId;

    let imageUrl = "";
    // compare that images are different
    if (input.image != currentServiceNoSQL?.image && input.image !== "") {
      imageUrl = await uploadFile(input.image, auxNameImage);
      if (imageUrl) {
        await updateFirestoreService({
          serviceId: input.serviceId,
          image: auxNameImage + "#" + imageUrl,
          disponibility: { ...input.disponibility },
        });
        await Service.update(
          {
            serviceId: input.serviceId,
          },
          {
            name: input.name,
            description: input.description,
            sport: input.sport,
          }
        );
      }
    } else {
      const nameImage = currentServiceNoSQL?.image.split("#")[0];
      await deleteImage(nameImage);
      await updateFirestoreService({
        serviceId: input.serviceId,
        image: input.image,
        disponibility: { ...(input.disponibility as Disponibility) },
      });
      await Service.update(
        {
          serviceId: input.serviceId,
        },
        {
          name: input.name,
          description: input.description,
          sport: input.sport,
        }
      );
    }

    return {
      status: "Ok",
      message: "Servicio se actualizo exitosamente",
    };
  } catch (error) {
    return {
      status: "Failed",
      message: "No se pudo actualizar" + JSON.stringify(error as Error),
    };
  }
};

export default UpdateServiceResolver;
