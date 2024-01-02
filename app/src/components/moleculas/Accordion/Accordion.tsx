import { IonAccordion, IonAccordionGroup, IonItem } from "@ionic/react";
import React from "react";

export type AccordionProps = {
  accounts:
    | {
        bankName: string;
        id: string;
        accountType: string;
        accountNumber: string;
        email: string;
      }[]
    | undefined;
};
const Accordion = ({ accounts }: AccordionProps) => {
  return (
    <IonAccordionGroup className="flex flex-col gap-3">
      {accounts?.map((account) => {
        return (
          <IonAccordion key={account.accountNumber}>
            <IonItem slot="header">
              <h2 className="font-bold text-xl">{account.bankName}</h2>
            </IonItem>
            <div slot="content">
              <h3 className="text-primary text-lg font-semibold">
                Identificación
              </h3>
              <p className="text- font-light">{account.id}</p>
              <h3 className="text-primary text-lg font-semibold">
                Tipo de Cuenta
              </h3>
              <p className="text- font-light">{account.accountType}</p>
              <h3 className="text-primary text-lg font-semibold">
                Nro. de Cuenta
              </h3>
              <p className="text- font-light">{account.accountNumber}</p>
              <h3 className="text-primary text-lg font-semibold">
                Correo electrónico
              </h3>
              <p className="text- font-light">{account.email}</p>
            </div>
          </IonAccordion>
        );
      })}
    </IonAccordionGroup>
  );
};

export default Accordion;
