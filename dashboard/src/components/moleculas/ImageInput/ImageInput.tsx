type PropsImageInput = {
  label: string;
  fileBlob: string;
  setFileBlob: React.Dispatch<React.SetStateAction<string>>;
};

const ImageInput = ({ label, fileBlob, setFileBlob }: PropsImageInput) => {
  function fileToDataURL(file: File, callback: (dataURL: string) => void) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataURL = event.target?.result as string;
      callback(dataURL);
    };

    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col relative bg-background h-64 rounded-2xl justify-center items-center cursor-pointer">
      {!fileBlob ? (
        <>
          <label
            htmlFor="image input"
            className="text-customText font-semibold flex  flex-col items-center gap-3"
          >
            <img
              src="/icons/default-image.svg"
              alt="default"
              width={40}
              height={40}
            />
            {label}
          </label>
          <input
            type="file"
            className="h-full w-full absolute block opacity-0"
            name="image input"
            accept="image/*"
            id="image input"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                fileToDataURL(files[0], (dataURL) => {
                  setFileBlob(dataURL);
                });
              }
            }}
          />
        </>
      ) : (
        <div className="flex flex-col w-52 h-52">
          <img
            src={fileBlob}
            alt="image_service"
            className="flex flex-1 border border-green-300 opacity-95 rounded-lg"
          />
          <span
            className="text-primary py-1 font-semibold   text-center"
            onClick={() => {
              setFileBlob("");
            }}
          >
            Eliminar
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageInput;
