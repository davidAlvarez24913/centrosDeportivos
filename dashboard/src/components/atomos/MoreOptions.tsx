import { useState } from "react";

type PropsMoreOptions = {
  onEdit: () => void;
  onDelete: () => void;
};
const MoreOptions = ({ onEdit, onDelete }: PropsMoreOptions) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col relative ">
      <button onClick={() => setOpen(!open)} className="px-2">
        <img src="/icons/more.svg" alt="More options icon" width={28} />
      </button>
      <div
        className={`mt-7 ml-2 bg-background p-2 z-30 absolute bg-opacity-80 flex flex-col gap-2 rounded-md ${
          open ? "" : "hidden"
        }`}
      >
        <button
          onClick={onEdit}
          className="text-white text-start hover:bg-background hover:text-lg"
        >
          Editar
        </button>
        <button
          onClick={onDelete}
          className="text-white text-start hover:bg-background hover:text-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default MoreOptions;
