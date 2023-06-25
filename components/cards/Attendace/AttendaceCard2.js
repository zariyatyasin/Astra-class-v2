import React from "react";
import AttendanceChart from "./AttendaceCart1";

const AttendaceCard2 = () => {
  return (
    <div className="flex items-center  col-span-full justify-center border rounded shadow   ">
      <div className="flex flex-col w-full md:flex-row  ">
        <div className="w-full md:w-1/2 px-5  ">
          <AttendanceChart />
        </div>
        <div className="flex w-full md:w-1/2 p-10   text-gray-600 items-center">
          <div className="w-full">
            <h3 className="text-lg font-semibold leading-tight text-gray-800">
              Attendance Details
            </h3>
            <h6 className="text-sm leading-tight mb-2">Date: May 14, 2023</h6>
            <div className="flex w-full items-end mb-6">
              <span className="block leading-none text-3xl text-gray-800">
                90%
              </span>
              <span className="block leading-5 text-sm ml-4 text-green-500">
                Present
              </span>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-semibold">
                  Total Students
                </div>
                <div className="flex-1 px-3 text-right">100</div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-semibold">
                  Present Students
                </div>
                <div className="flex-1 pl-3 text-right">90</div>
              </div>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex w-5/12">
                <div className="flex-1 pr-3 text-left font-semibold">
                  Absent Students
                </div>
                <div className="flex-1 px-3 text-right">10</div>
              </div>
              <div className="flex w-7/12">
                <div className="flex-1 px-3 text-left font-semibold">
                  Late Students
                </div>
                <div className="flex-1 pl-3 text-right">0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendaceCard2;
