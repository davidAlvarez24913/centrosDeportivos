type PropsImageInput = {
  label: string;
  fileBlob: string | undefined;
  setFileBlob: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ImageInput = ({ label, fileBlob, setFileBlob }: PropsImageInput) => {
  console.log(fileBlob);
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
                const image = URL.createObjectURL(files[0]);
                setFileBlob(image);
              }
            }}
          />
        </>
      ) : (
        <div className="flex flex-col w-36 h-36">
          <img
            src={fileBlob}
            alt="image_service"
            className=" border border-green-300 opacity-95 rounded-lg"
          />
          <span
            className="text-red-700 py-2 text-center"
            onClick={() => {
              setFileBlob(undefined);
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
