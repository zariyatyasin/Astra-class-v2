import { useSelector } from "react-redux";
import { AdminNav } from "./AdminNav";
import AdminSide from "./AdminSide";

export default function AdminLayout({ children }) {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  return (
    <>
      <AdminNav />
      <AdminSide />
      <div
        className={` ${
          OpenSidebar && "md:ml-[275px]"
        }  md:mt-24  mt-24 mx-6 transition-all ease-in-out duration-300 `}
      >
        {children}
      </div>
    </>
  );
}
