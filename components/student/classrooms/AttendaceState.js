import React from "react";

function AttendanceStats({ attendanceData }) {
  const totalClasses = attendanceData.length;
  const totalPresent = attendanceData.filter((item) => item.present).length;
  const totalAbsent = attendanceData.filter((item) => item.absent).length;
  const percentPresent =
    totalClasses > 0 ? Math.round((totalPresent / totalClasses) * 100) : 0;
  const percentAbsent =
    totalClasses > 0 ? Math.round((totalAbsent / totalClasses) * 100) : 0;

  return (
    // <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
    //   <div className="bg-green-500 rounded-md text-white py-4 px-6 flex flex-col justify-center items-center">
    //     <div className="font-bold text-2xl mb-1">{totalPresent}</div>
    //     <div className="font-medium text-lg">Present</div>
    //   </div>
    //   <div className="bg-red-500 rounded-md text-white py-4 px-6 flex flex-col justify-center items-center">
    //     <div className="font-bold text-2xl mb-1">{totalAbsent}</div>
    //     <div className="font-medium text-lg">Absent</div>
    //   </div>
    //   <div className="bg-blue-500 rounded-md text-white py-4 px-6 flex flex-col justify-center items-center">
    //     <div className="font-bold text-2xl mb-1">{percentPresent}%</div>
    //     <div className="font-medium text-lg">Attendance</div>
    //   </div>
    //   <div className="bg-yellow-500 rounded-md text-white py-4 px-6 flex flex-col justify-center items-center">
    //     <div className="font-bold text-2xl mb-1">{percentAbsent}%</div>
    //     <div className="font-medium text-lg">Absenteeism</div>
    //   </div>
    // </div>
    <div className="   ">
      <div className="flex flex-col border shadow  bg-white rounded p-4 w-full max-w-xs">
        <div className="font-bold text-xl">Sydney</div>
        <div className="text-sm text-gray-500">Thursday 10 May 2020</div>
        {/* <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24"></div> */}

        <div className="flex flex-row justify-between mt-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Present</div>
            <div className="text-sm text-gray-500">{totalPresent}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Attendance</div>
            <div className="text-sm text-gray-500">{percentPresent}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">10km</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceStats;
