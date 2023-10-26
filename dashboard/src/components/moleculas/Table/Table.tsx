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
                <th
                  scope="col"
                  key={header}
                  className="py-3 first:pl-2 text-center "
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.length >= 1 ? (
            data?.map((item, index) => {
              // this line is temporarily because index is same
              // return item;
              return { ...item, key: item.key?.toString() + index.toString() };
            })
          ) : (
            <tr>
              <td>
                <span className="text-xl text-center">No existen datos</span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
