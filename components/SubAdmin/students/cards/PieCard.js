import React from "react";
import { PieChart } from "../chart/Chart";

export const PieCard = ({ title, color }) => {
  return (
    <div className="p-4 bg-white  shadow  flex flex-col  col-span-full sm:col-span-6 xl:col-span-4  rounded-sm border border-slate-200 h-full   ">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-400">Total Users</span>
          <span className="text-lg font-semibold">100,221</span>
        </div>
        <div className="flex  h-24 w-24   items-center justify-center  ">
          <PieChart color={color}></PieChart>
        </div>
      </div>
      <div>
        <span className="inline-block px-2 text-sm text-white bg-green-300 rounded">
          14%
        </span>
        <span>from 2019</span>
      </div>
    </div>
  );
};
