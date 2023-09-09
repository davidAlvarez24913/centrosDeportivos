import React, { ReactElement } from "react";

type TableProps = {
  headers: string[];
  data: ReactElement[];
};

const Table = ({ headers, data }: TableProps) => {
  return (
    <div className="border-2 border-background rounded-lg my-3">
      <table className="w-full text-xs leading-4 font-medium text-left">
        <thead className="text-xs text-white uppercase tracking-wider bg-background">
          <tr className="pl-3">
            {headers.map((header) => {
              return (
                <th scope="col" key={header} className="py-3 first:px-3">
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return item;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
