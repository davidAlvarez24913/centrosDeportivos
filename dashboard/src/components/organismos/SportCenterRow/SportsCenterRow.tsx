import React from "react";
import { toast } from "react-toastify";
import {
  useGiveAccessMutation,
  useRemoveAccessMutation,
  useSuscribedMutation,
  useUnSuscribedMutation,
} from "schema";

type SportCenterRowProps = {
  sportCenterId: string;
  name: string;
  email: string;
  access: boolean;
  isSuscribed: boolean;
  index: number;
  refetch: () => void;
};
const SportCenterRow = (reservation: SportCenterRowProps) => {
  const { sportCenterId, name, email, access, isSuscribed, index, refetch } =
    reservation;
  const [giveAccessMutation, statusGiveAccess] = useGiveAccessMutation();
  const [removeAccessMutation, statusRemoveAccess] = useRemoveAccessMutation();
  const [suscribedMutation, statusSuscribed] = useSuscribedMutation();
  const [unSuscribedMutation, statusUnsuscribed] = useUnSuscribedMutation();

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
                  removeAccessMutation({
                    variables: { sportCenterId: sportCenterId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.removeAccess?.message, {
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
                  giveAccessMutation({
                    variables: { sportCenterId: sportCenterId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.giveAccess?.message, {
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
        <th className="py-5">
          <div className="flex justify-center">
            {isSuscribed ? (
              <button
                disabled={statusSuscribed.loading}
                className="text-center font-semibold text-sm rounded-lg w-36 py-2 text-green-800 bg-green-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  unSuscribedMutation({
                    variables: { sportCenterId: sportCenterId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.unSuscribed?.message, {
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
                Activa
              </button>
            ) : (
              <button
                disabled={statusUnsuscribed.loading}
                className="text-center font-semibold text-sm rounded-lg w-36 py-2 text-red-700 bg-red-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  suscribedMutation({
                    variables: { sportCenterId: sportCenterId },
                    onCompleted(data) {
                      refetch();
                      toast.success(data.suscribed?.message, {
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
                Inactiva
              </button>
            )}
          </div>
        </th>
      </tr>
    </>
  );
};

export default SportCenterRow;
