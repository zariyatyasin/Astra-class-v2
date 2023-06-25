import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../Teacher/Menu/Navbar";
import Sidebar from "../Teacher/Menu/Sidebar";
import { SidebarOpen } from "@/store/globalSlice";
export default function TeacherLayout({ children }) {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  const dispatch = useDispatch();
  return (
    <div className="">
      <NavBar />
      <Sidebar></Sidebar>
      <div
        className={` ${
          OpenSidebar ? "fixed inset-0 bg-black opacity-50 z-10" : ""
        }    `}
        onClick={() => dispatch(SidebarOpen(!OpenSidebar))}
      ></div>
      <div className="mt-24">{children}</div>
    </div>
  );
}
