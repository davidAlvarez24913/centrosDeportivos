import React, { useState } from "react";
import { CustomButton, CustomInput } from "../../atomos";
import { CreateBankAccountInput } from "schema";
type BanckAccountFormProps = {
  closeModal: () => void;
  onCreate: (input: CreateBankAccountInput) => void;
  sportCenterId: string;
};
const BanckAccountForm = ({
  closeModal,
  onCreate,
  sportCenterId,
}: BanckAccountFormProps) => {
  const [bankAccount, setbankAccount] = useState<CreateBankAccountInput>({
    name: "",
    id: "",
    accountNumber: "",
    accountType: "",
    email: "",
    sportCenterId: sportCenterId,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(bankAccount);
    event.currentTarget.reset();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setbankAccount({ ...bankAccount, [event.target.name]: event.target.value });
  };
  return (
    <form className="flex flex-col gap-3 py-4" onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        color="blue"
        name="name"
        label="Nombre del Banco"
        required
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="id"
        label="Identificacion"
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="accountType"
        label="Tipo de Cuenta"
        required
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="accountNumber"
        label="Nro. Cuenta"
        required
        onChange={handleChange}
      />
      <CustomInput
        type="text"
        color="blue"
        name="email"
        label="Correo Electronico"
        required
        onChange={handleChange}
      />
      <CustomButton
        title="crear cuenta bancaria"
        color="sucessfull"
        type="submit"
      />
    </form>
  );
};

export default BanckAccountForm;
