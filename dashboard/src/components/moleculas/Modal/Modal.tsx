import React, { PropsWithChildren } from "react";
import { MoreOptions } from "../../atomos";

type ModalPorps = {
  title: string;
  modalState: boolean;
  closeModal: () => void;
  cantClose?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  moreOptions?: boolean;
} & PropsWithChildren;

const Modal = ({
  title,
  modalState,
  closeModal,
  cantClose,
  children,
  onEdit,
  onDelete,
  moreOptions = false,
}: ModalPorps) => {
  return (
    <>
      {modalState && (
        <div className="bg-gray-700 bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="bg-white flex flex-col w-full max-w-lg max-h-[95%] border overflow-y-auto border-white rounded-xl px-7 py-8 ">
            <div className="text-base flex flex-row justify-between">
              <h2 className="text-xl font-bold">{title}</h2>
              <div className="flex">
                {moreOptions && (
                  <MoreOptions onDelete={onDelete!} onEdit={onEdit!} />
                )}
                <button
                  type="button"
                  className="flex items-center justify-start"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  {!cantClose && (
                    <img
                      src="/icons/close.svg"
                      alt="close button"
                      className="w-6"
                    />
                  )}
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
