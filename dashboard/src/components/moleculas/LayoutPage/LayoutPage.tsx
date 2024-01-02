import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";

type PropsLayout = {
  children: React.ReactNode;
  nameSportCenter?: string;
};
const LayoutPage = ({ children, nameSportCenter }: PropsLayout) => {
  return (
    <div className="flex flex-row space-x-10 w-full">
      <Navbar nameSportCenter={nameSportCenter ?? "Centro deportivo "} />
      <div className="flex flex-col w-full mt-20 mx-6 justify-between">
        {children}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LayoutPage;
