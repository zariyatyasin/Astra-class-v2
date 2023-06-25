import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="bg-white  flex flex-col  col-span-full sm:col-span-6 xl:col-span-4 bg-white  rounded-sm border border-slate-200  h-full rounded-md shadow   text-[#5e5873] ">
      <div className="   ">
        <div className="relative">
          <div>
            <img
              className="h-[120px] absolute right-0 sm:right-3"
              alt="Student"
              src={"./image/medelGold.png"}
            ></img>
          </div>
        </div>
        <div className="p-4  flex flex-col justify-between  h-full  ">
          <div className="flex">
            <div className=" ">
              <h1 className=" text-[#5e5873] font-medium text-sm">
                Congratulations! <span>Md Yasin</span>
              </h1>
              <p className=" text-xs mt-1">You have won medal</p>
            </div>
          </div>
          <div className="">
            <p className=" text-xl text-[#7367F0] mb-2 font-semibold mt-5">
              CGPA 4
            </p>
            {/* <div className=" cursor-pointer w-max text-white bg-[#7367F0]  font-semibold rounded-md text-xs px-5 py-2.5 mr-2 mb-2  ">
              View Results
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
