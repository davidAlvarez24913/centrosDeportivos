import { SportCenter } from "../../db/TypeOrm/Entities";
import {
  findSportCenter,
  updateFirestoreSportCenter,
} from "../../db/Firebase/Firestore/SportCenter";
import { deleteImage, uploadFile } from "../../db/Firebase/Bucket";

const UpdateSportCenterResolver = async (root: any, { input }: any) => {
  // query to get current data, if dont pass sql data not update record
  const currentSportCenterSQL = await SportCenter.find({
    where: { sportCenterId: input.sportCenterId },
  });
  const currentSportCenterNoSQL = await findSportCenter(input.sportCenterId);

  try {
    if (input.image !== currentSportCenterNoSQL?.image) {
      if (input.image !== "") {
        const auxNameImage = "sportscenter/" + input.sportCenterId + "#";
        let imageUrl = "";
        imageUrl = await uploadFile(input.image, auxNameImage);
        if (imageUrl) {
          await updateFirestoreSportCenter({
            sportCenterId: input.sportCenterId,
            image: auxNameImage + imageUrl,
          });
        }

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
        const nameImage =
          "sportscenter/" +
          (currentSportCenterNoSQL?.sportCenterId as string) +
          "#";
        await deleteImage(nameImage);
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
      }
    } else {
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