import { IonContent, IonHeader, IonModal } from "@ionic/react";
import React, { PropsWithChildren } from "react";
import { Background } from "src/components/atomos";

type ModalPorps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  label: string;
  cantClose?: boolean;
} & PropsWithChildren;

const Modal = ({
  isOpen,
  setIsOpen,
  label,
  cantClose = false,
  children,
}: ModalPorps) => {
  return (
    <IonModal isOpen={isOpen}>
      <IonHeader>
        <Background>
          <div
            className={`text-white flex flex-row items-center justify-between ${
              cantClose && "py-2"
            } `}
          >
            <h2 className="text-xl font-bold">{label}</h2>
            {!cantClose && (
              <button
                type="button"
                className="flex items-center justify-start gap-4 p-4 bg-transparent"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img
                  src="/assets/icon/close.svg"
                  alt="close button"
                  className="w-6"
                />
              </button>
            )}
          </div>
        </Background>
      </IonHeader>
      <IonContent>
        <Background>{children}</Background>
      </IonContent>
    </IonModal>
  );
};

export default Modal;
