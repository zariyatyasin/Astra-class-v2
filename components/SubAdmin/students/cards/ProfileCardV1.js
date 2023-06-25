import React from "react";
import { LineChart } from "../chart/Chart";

const ProfileCardV1 = () => {
  return (
    <div className="rounded-xl shadow border  md:h-48 overflow-hidden w-full md:flex">
      <div className="flex w-full md:w-1/2 pt-4 birder bg-indigo-500  px-2 items-center">
        <LineChart color={"#FFFFFF"} />
      </div>
      <div className="flex w-full md:w-1/2 p-10  bg-white text-gray-600 items-center">
        <div className="w-full">
          <h3 className="text-lg font-semibold leading-tight text-gray-800"></h3>

          <div className="flex w-full items-end mb-6">
            <span className="block leading-none text-3xl text-gray-800">
              3.56
            </span>
          </div>
          <div className="flex w-full text-xs">
            <div className="flex w-5/12">
              <div className="flex-1 pr-3 text-left ">Open</div>
              <div className="flex-1 px-3 text-right">0</div>
            </div>
            <div className="flex w-7/12">
              <div className="flex-1 px-3 text-left ">Market</div>
              <div className="flex-1 pl-3 text-right">0</div>
            </div>
          </div>
          <div className="flex w-full text-xs">
            <div className="flex w-5/12">
              <div className="flex-1 pr-3 text-left ">High</div>
              <div className="px-3 text-right">0</div>
            </div>
            <div className="flex w-7/12">
              <div className="flex-1 px-3 text-left font-semibold">
                P/E ratio
              </div>
              <div className="pl-3 text-right">0</div>
            </div>
          </div>
          <div className="flex w-full text-xs">
            <div className="flex w-5/12">
              <div className="flex-1 pr-3 text-left font-semibold">Low</div>
              <div className="px-3 text-right">0</div>
            </div>
            <div className="flex w-7/12">
              <div className="flex-1 px-3 text-left font-semibold">
                Dividend yield
              </div>
              <div className="pl-3 text-right">0%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardV1;
