type PropsImageInput = {
  label: string;
};

const ImageInput = ({ label }: PropsImageInput) => {
  return (
    <div className="flex flex-col bg-background w-[500px] h-[300px] rounded-2xl justify-center items-center cursor-pointer">
      <div>
        <img
          src="/icons/default-image.svg"
          alt="default"
          width={40}
          height={40}
        />
      </div>
      <label htmlFor="image input" className="text-customText">
        {label}
      </label>
      <input
        type="file"
        className="h-full w-full absolute block opacity-0"
        name="image input"
        accept="image/*"
        id="image input"
        multiple
      />
    </div>
  );
};

export default ImageInput;
