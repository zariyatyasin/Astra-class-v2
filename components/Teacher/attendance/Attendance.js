import { useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import axios from "axios";

export default function Attendance({ courseId, addedStudents }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [students, setStudents] = useState(addedStudents);
  const toggleAll = () => {
    if (toggle) {
      const updatedStudents = students.map((student) => ({
        ...student,
        present: true,
        absentDates: [],
      }));
      setStudents(updatedStudents);
    } else {
      const updatedStudents = students.map((student) => ({
        ...student,
        present: false,
        absentDates: [
          ...student.absentDates,
          new Date().toLocaleDateString("en-US"),
        ],
      }));
      setStudents(updatedStudents);
    }
    setToggle(!toggle);
  };
  const handleAttendanceChange = (index, present) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = present;
    if (!present) {
      if (!updatedStudents[index].absentDates) {
        updatedStudents[index].absentDates = [selectedDate.toDateString()];
      } else {
        updatedStudents[index].absentDates.push(selectedDate.toDateString());
      }
    } else {
      if (updatedStudents[index].absentDates) {
        updatedStudents[index].absentDates = updatedStudents[
          index
        ].absentDates.filter((date) => date !== selectedDate.toDateString());
      }
    }
    setStudents(updatedStudents);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const tileContent = ({ date, view }) => {
    if (!students) {
      return null;
    }
    const dateString = date.toDateString();
    const studentAbsentOnDate = students.filter((student) =>
      student.absentDates.includes(dateString)
    );
    const tooltip = studentAbsentOnDate
      .map((student) => student.name)
      .join(", ");
    return (
      <div>
        <p>{date.getDate()}</p>
        {studentAbsentOnDate.length > 0 && (
          <p className="text-sm text-red-600">
            {studentAbsentOnDate.length} Absent
          </p>
        )}
        {studentAbsentOnDate.length > 0 && view === "month" && (
          <span className="absolute top-0 right-0 m-1 w-3 h-3 bg-red-600 rounded-full"></span>
        )}
        {tooltip && <p className="text-xs">{tooltip}</p>}
      </div>
    );
  };

  const saveAttendance = async () => {
    const studentAttendanceData = students.map((student) => ({
      studentId: student._id,
      courseId: courseId,
      attendance: {
        date: selectedDate,
        present: student.present,
        absent: !student.present,
      },
    }));

    console.log("new stu", studentAttendanceData);
  };

  const markAllPresent = () => {
    const updatedStudents = students.map((student) => {
      return { ...student, present: true };
    });
    setStudents(updatedStudents);
  };
  const markAllAbsent = () => {
    const updatedStudents = students.map((student) => {
      const absentDates = Array.isArray(student.absentDates)
        ? [...student.absentDates, selectedDate.toDateString()]
        : [selectedDate.toDateString()];

      return {
        ...student,
        present: false,
        absentDates,
      };
    });
    setStudents(updatedStudents);
  };

  const averageAttendance = () => {
    const numStudents = students.length;
    const numPresentDays = students.reduce((totalDays, student) => {
      return totalDays + (student.present ? 1 : 0);
    }, 0);
    return ((numPresentDays / (numStudents * 4)) * 100).toFixed(2);
  };

  return (
    <div className="   py-10 bg-white  ">
      <div className=" ">
        <div className="sm:flex sm:items-center px-4 sm:px-6 lg:px-8">
          <div className="mt-4 sm:mt-0   sm:flex-none relative">
            <div className="relative z-0 inline-flex shadow-sm rounded-md  ">
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={toggleCalendar}
              >
                {selectedDate.toDateString()}
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                onClick={toggleAll}
              >
                {toggle ? "Mark All Present" : "Mark All Absent"}
              </button>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                {averageAttendance()}%
              </button>
            </div>

            {showCalendar && (
              <Calendar
                className=" absolute left-0 top-12"
                date={selectedDate}
                onChange={handleDateSelect}
                tileContent={tileContent}
                showDoubleView={true}
              />
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden   ring-1 ring-black ring-opacity-5  ">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Student ID
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Progress
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6"
                      >
                        Attendace
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {students.map((student, index) => (
                      <tr className="divide-x divide-gray-200" key={index}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                          {student.name}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {student.rollNumber}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          {student.email}
                        </td>
                        <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: "40%" }}
                            ></div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">
                          <button
                            className={`${
                              student.present ? "bg-green-500" : "bg-red-500"
                            } inline-flex items-center px-4 py-2 text-white text-sm font-medium rounded-md`}
                            onClick={() =>
                              handleAttendanceChange(index, !student.present)
                            }
                          >
                            {student.present ? "Present" : "Absent"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className=" flex justify-center mt-10">
                <button
                  type="button"
                  className="  text-center inline-flex items-center px-4 py-2 rounded border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none "
                  onClick={saveAttendance}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
