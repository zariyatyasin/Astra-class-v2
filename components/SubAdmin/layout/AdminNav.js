import { SidebarOpen } from "@/store/globalSlice";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import SchoolIcon from "@mui/icons-material/School";
export const AdminNav = () => {
  const { OpenSidebar } = useSelector((state) => state.globalStore);
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed top-0 left-0 z-10  transition-all ease-in-out duration-300 bg-white   border-b h-20   w-full flex items-center ${
        OpenSidebar ? "md:pl-64" : "md:pl-0"
      }`}
      style={{
        transform: OpenSidebar ? "translateX(0)" : "",
      }}
    >
      <div className={`flex items-center text-black px-4`}>
        <div
          className="text-2xl md:text-3xl cursor-pointer"
          onClick={() => dispatch(SidebarOpen(true))}
        >
          <MenuIcon />
        </div>
        {/* <div className="flex ml-2 flex-col  justify-center">
          <div className="flex items-center">
            <div className="text-xl  font-light mr-2">Md Yasin</div>
            <div className="text-[#6699FF]">
              <SchoolIcon sx={{ fontSize: 20 }}></SchoolIcon>
            </div>
          </div>

          <span className="text-gray-600 text-xs font-light">
            Computer Science & Engineering
          </span>
        </div> */}
      </div>
    </div>
  );
};
