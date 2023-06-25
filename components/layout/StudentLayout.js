import { useDispatch, useSelector } from "react-redux";
import Menu from "../menus/Menu";
import { NavBar } from "../menus/NavBar";
import { SidebarOpen } from "@/store/globalSlice";
export default function StudentLayout({ children }) {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  const dispatch = useDispatch();
  return (
    <div>
      <NavBar />
      <Menu></Menu>
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
