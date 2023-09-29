import {
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
  uploadString,
  deleteObject,
} from "firebase/storage";
import { storage } from "./config";

function dataURLToFile(dataURL: string, fileName: string): File | null {
  try {
    const blob = dataURL.startsWith("data:")
      ? new Blob([dataURL], { type: "" })
      : null;

    if (!blob) {
      return null;
    }

    return new File([blob], fileName);
  } catch (error) {
    // console.error("Error al convertir Data URL a File:", error);
    return null;
  }
}

export const uploadFile = async (file: string, nameImage: string) => {
  const storageRef = ref(storage, nameImage);
  await uploadString(storageRef, file, "data_url");
  const url = await getDownloadURL(storageRef);
  return url;
};

export const deleteImage = async (nameImage: string) => {
  const storageRef = ref(storage, nameImage);
  return await deleteObject(storageRef);
};
