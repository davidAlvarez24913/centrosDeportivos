import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const uploadFile = async (file: File, nameImage: string) => {
  const storageRef = ref(storage, nameImage);
  return await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded a image file!", snapshot);
  });
};

export const getUrlImage = async (image: string) => {
  const storageRef = ref(storage, image);
  return await getDownloadURL(storageRef);
};
