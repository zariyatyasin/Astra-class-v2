import Link from "next/link";
import React from "react";

export const ClassRoomCard = ({
  description,
  students,
  name,
  code,
  credits,
  section,
  date,
  classId,
}) => {
  return (
    <div>
      <div className="relative overflow-hidden border flex flex-col justify-between space-y-3 text-sm rounded-lg shadow h-48 p-4 mb-4 bg-white text-black">
        <div className="flex items-center justify-between font-medium">
          <span className="uppercase text-xs text-green-500">{code}</span>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
              <line x1="3" y1="22" x2="21" y2="22" />
            </svg>
          </div>
          <span className="text-base font-medium">{name}</span>
        </div>
        <div className="text-gray-500">{description}</div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-medium text-gray-500">
              {students} Students
            </span>
            <span className="text-gray-500 mx-2">•</span>
            <span className="text-gray-500">{credits} Credits</span>
            <span className="text-gray-500 mx-2">•</span>
            <span className="text-gray-500">{section} Section</span>
          </div>
          <Link
            href={`/teacher/classroom/${classId}`}
            className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white"
          >
            <span>View</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
