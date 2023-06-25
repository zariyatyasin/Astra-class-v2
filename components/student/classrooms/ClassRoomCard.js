import React from "react";

const ClassroomCard = ({ classroom }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{classroom.name}</h2>
      <p className="text-gray-700 mb-4">{classroom.description}</p>
      <div className="flex items-center mb-4">
        <div className="bg-green-500 text-white rounded-lg px-3 py-1 mr-2">
          Grade: {classroom.grade}
        </div>
        <div className="bg-blue-500 text-white rounded-lg px-3 py-1">
          Students: {classroom.studentsCount}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700 font-bold">Attendance:</p>
          <p>{classroom.attendance}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Class Post:</p>
          <p>{classroom.classPost}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Student Number:</p>
          <p>{classroom.studentNumber}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Exam Date:</p>
          <p>{classroom.examDate}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Class Credit:</p>
          <p>{classroom.classCredit}</p>
        </div>
        <div>
          <p className="text-gray-700 font-bold">Section:</p>
          <p>{classroom.section}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassroomCard;
