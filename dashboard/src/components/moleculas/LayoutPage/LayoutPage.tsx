import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";

type PropsLayout = {
  children: React.ReactNode;
  nameSportCenter?: string;
};
const LayoutPage = ({ children, nameSportCenter }: PropsLayout) => {
  return (
    <div className="flex flex-row gap-5 md:gap-20">
      <Navbar nameSportCenter={nameSportCenter ?? "Centro deportivo "} />
      <div className="flex flex-col w-2/3 mt-20 px-4 ">{children}</div>
      <ToastContainer />
    </div>
  );
};

export default LayoutPage;
