import React, { useEffect, useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";

type PropsPhotPicker = {
  // Remenber this props will be ook useSate
  photo: string | undefined;
  setPhoto: (img: string | undefined) => void;
};
const PhotoPicker = ({ photo, setPhoto }: PropsPhotPicker) => {
  // TODO Add permissions on manifest
  // https://capacitorjs.com/docs/apis/camera?_gl=1*17p390l*_ga*MTU0NTk3MTMwOS4xNjgxMzU5NTQ1*_ga_REH9TJF6KF*MTY5MzQzNTg2MS4zNC4xLjE2OTM0MzU5MTcuMC4wLjA.
  //   https://ionicframework.com/docs/react/your-first-app/taking-photos

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });

    if (image.dataUrl) setPhoto(image.dataUrl);
  };

  return (
    <div
      // type="button"
      className="w-full border-[1px] rounded-md border-slate-500 bg-background h-48 flex justify-evenly"
      // fill="clear"
    >
      {photo !== undefined ? (
        <div className="flex justify-evenly">
          <button
            type="button"
            className="text-customText h-44 bg-transparent"
            onClick={() => setPhoto(undefined)}
          >
            ✕
          </button>
          <img src={photo} alt="" className="h-44 w-4/5 object-cover" />
        </div>
      ) : (
        <button
          type="button"
          onClick={takePicture}
          className="flex flex-1 flex-col items-center h-44 justify-center "
        >
          <img
            src="assets/icon/photo-default.svg"
            alt="photo-default"
            className="w-5 h-5"
          />
          <p className="capitalize">Subir Imagen</p>
        </button>
      )}
    </div>
  );
};
export default PhotoPicker;
