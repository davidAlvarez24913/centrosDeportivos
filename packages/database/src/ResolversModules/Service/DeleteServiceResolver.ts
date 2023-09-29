import { Service } from "../../db/TypeOrm/Entities";
import {
  deleteFirestoreService,
  findService,
} from "../../db/Firebase/Firestore/Service";
import { deleteImage } from "../../db/Firebase/Bucket";

const DeleteServiceResolver = async (
  root: any,
  { serviceId }: { serviceId: string }
) => {
  const flagNoSQL = await findService(serviceId);
  const flagSQL = await Service.findOneBy({ serviceId: Number(serviceId) });

  if (flagNoSQL && flagSQL) {
    const deleteSQL = await Service.delete({
      serviceId: Number(serviceId),
    });
    // delete image bucket
    const nameImage = flagNoSQL.image.split("#")[0];
    await deleteImage(nameImage);

    const deletNoSQL = await deleteFirestoreService(serviceId);
    const result = await Promise.all([deletNoSQL, deleteSQL]);
    if (result[1].affected === 1) {
      return { status: "Ok", message: "Servicio eliminado correctmente" };
    } else {
      return { status: "Failed", message: "Servicio no se elimino ;)" };
    }
  } else {
    return { status: "Failed", message: "El id de servico no existe" };
  }
};

export default DeleteServiceResolver;
