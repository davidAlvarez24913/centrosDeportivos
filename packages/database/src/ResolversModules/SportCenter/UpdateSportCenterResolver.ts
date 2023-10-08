import { SportCenter } from "../../db/TypeOrm/Entities";
import {
  findSportCenter,
  updateFirestoreSportCenter,
} from "../../db/Firebase/Firestore/SportCenter";
import { deleteImage, uploadFile } from "../../db/Firebase/Bucket";

const UpdateSportCenterResolver = async (root: any, { input }: any) => {
  try {
    // query to get current data, if dont pass sql data not update record
    const currentSportCenterSQL = await SportCenter.find({
      where: { sportCenterId: input.sportCenterId },
    });
    const currentSportCenterNoSQL = await findSportCenter(input.sportCenterId);
    const auxNameImage = "sportscenter/" + input.sportCenterId + "#";
    let imageUrl = "";

    if (input.image === "") {
      currentSportCenterNoSQL?.image && (await deleteImage(auxNameImage));
      await updateFirestoreSportCenter({
        sportCenterId: input.sportCenterId,
        image: input.image,
      });
      await SportCenter.update(
        {
          sportCenterId: input.sportCenterId,
        },
        {
          name: input.name,
          phone: input.phone,
          email: input.email,
          description: input.description,
          ubication: input.ubication,
          schedule: input.schedule,
        }
      );
    } else {
      if (auxNameImage + input.image === currentSportCenterNoSQL?.image) {
        await updateFirestoreSportCenter({
          sportCenterId: input.sportCenterId,
          image: auxNameImage + input.image,
        });
        await SportCenter.update(
          {
            sportCenterId: input.sportCenterId,
          },
          {
            name: input.name,
            phone: input.phone,
            email: input.email,
            description: input.description,
            ubication: input.ubication,
            schedule: input.schedule,
          }
        );
      } else {
        imageUrl = await uploadFile(input.image, auxNameImage);
        if (imageUrl) {
          await updateFirestoreSportCenter({
            sportCenterId: input.sportCenterId,
            image: auxNameImage + imageUrl,
          });
          await SportCenter.update(
            {
              sportCenterId: input.sportCenterId,
            },
            {
              name: input.name,
              phone: input.phone,
              email: input.email,
              description: input.description,
              ubication: input.ubication,
              schedule: input.schedule,
            }
          );
        }
      }
    }

    return {
      status: "Ok",
      message: "Centro deportivo se actualizo exitosamente",
    };
  } catch (error) {
    return {
      status: "Failed",
      message: "No se pudo actualizar" + JSON.stringify(error),
    };
  }
};

export default UpdateSportCenterResolver;
