import React, { PropsWithChildren } from "react";

type ModalPorps = {
  modalState: boolean;
  closeModal: () => void;
} & PropsWithChildren;

const Modal = ({ modalState, closeModal, children }: ModalPorps) => {
  return (
    <>
      {modalState && (
        <div className="bg-gray-700 bg-opacity-40 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="bg-white flex flex-col w-full max-w-md border border-white rounded-xl px-7 py-8 ">
            <div className="text-base flex justify-end">
              <button
                type="button"
                className="flex items-center justify-start p-4"
                onClick={() => {
                  closeModal();
                }}
              >
                <img
                  src="/icons/close.svg"
                  alt="close button"
                  className="w-6"
                />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
