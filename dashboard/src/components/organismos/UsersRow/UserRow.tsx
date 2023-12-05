import React from "react";
import { toast } from "react-toastify";
import { useGiveUserAccessMutation, useRemoveUserAccessMutation } from "schema";

type UserRowProps = {
  userId: string;
  name: string;
  email: string;
  access: boolean;
  index: number;
  refetch: () => void;
};
const UserRow = (user: UserRowProps) => {
  const { userId, name, email, access, index, refetch } = user;
  const [giveUserAccessMutation, statusGiveAccess] =
    useGiveUserAccessMutation();
  const [removeUserAccessMutation, statusRemoveAccess] =
    useRemoveUserAccessMutation();
  return (
    <>
      <tr className="border-b border-background ">
        <th className="pl-2 py-5">
          <p className="text-center text-sm font-normal">{index}</p>
        </th>
        <th className="py-5">
          <p className="text-center text-sm font-normal">{name}</p>
        </th>
        <th className="py-5">
          <p className="text-center text-sm font-normal">{email}</p>
        </th>
        <th className="py-5">
          <div className="flex justify-center">
            {access ? (
              <button
                disabled={statusGiveAccess.loading}
                className="text-center font-semibold text-sm rounded-lg w-36 py-2 text-green-800 bg-green-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  removeUserAccessMutation({
                    variables: { userId: userId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.removeUserAccess?.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    },
                    onError(error) {
                      toast.error(error.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    },
                  });
                }}
              >
                Permitido
              </button>
            ) : (
              <button
                disabled={statusRemoveAccess.loading}
                className="text-center font-semibold text-sm rounded-lg w-36 py-2 text-red-700 bg-red-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  giveUserAccessMutation({
                    variables: { userId: userId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.giveUserAccess?.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    },
                    onError(error) {
                      toast.error(error.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    },
                  });
                }}
              >
                Denegado
              </button>
            )}
          </div>
        </th>
      </tr>
    </>
  );
};

export default UserRow;
