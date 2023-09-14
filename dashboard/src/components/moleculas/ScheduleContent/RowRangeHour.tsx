import { RangeHour } from "schema";

type PropsSchdeuleContent = {
  scheduelId: string;
  rangeHour: RangeHour;
};
const RowRangeHour = ({ scheduelId, rangeHour }: PropsSchdeuleContent) => {
  return (
    <div className="flex justify-between">
      <p className="font-light">{`${rangeHour.startHour}-${rangeHour.endHour}`}</p>
      <p className="font-light">$ {rangeHour.price}</p>
      <p
        className="font-normal text-green-600 cursor-pointer"
        onClick={() => {
          // mutation to edit range hour
          console.log(scheduelId);
        }}
      >
        Editar
      </p>
      <p
        className="font-normal text-red-700 cursor-pointer"
        onClick={() => {
          // mutation do delete range hour
          console.log(scheduelId);
        }}
      >
        Eliminar
      </p>
    </div>
  );
};

export default RowRangeHour;
