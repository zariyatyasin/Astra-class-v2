import SelectInputFromData from "@/components/inputs/SelectInputCourse";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CreateClassForm = ({
  teachers,
  courses,
  faculties,
  setData,
  setModelOpen,
}) => {
  const [name, setname] = useState("");
  const [code, setcode] = useState("");
  const [description, setDescription] = useState("");
  const [faculty, setFaculty] = useState(faculties[0]?.faculty);
  const [credits, setCredits] = useState("");
  const [section, setSection] = useState("");
  const [course, setCourse] = useState("");
  const [teacher, setTeacher] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [batch, setBatch] = useState("");

  const [schedule, setSchedule] = useState([]);

  const handleDayOfWeekSelect = (selectedDayOfWeek, index) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        dayOfWeek: selectedDayOfWeek,
      };
      return updatedSchedule;
    });
  };

  const handleStartTimeChange = (startTime, index) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        startTime,
      };
      return updatedSchedule;
    });
  };

  const handleEndTimeChange = (endTime, index) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        endTime,
      };
      return updatedSchedule;
    });
  };
  const handleAddSchedule = () => {
    setSchedule((prevSchedule) => [
      ...prevSchedule,
      { dayOfWeek: "", startTime: "", endTime: "" },
    ]);
  };

  const handleRemoveSchedule = (index) => {
    setSchedule((prevSchedule) => {
      const updatedSchedule = [...prevSchedule];
      updatedSchedule.splice(index, 1);
      return updatedSchedule;
    });
  };

  const handleCourseSelect = (selectedCourse) => {
    setCourse(selectedCourse);
  };

  const handleTeacherSelect = (selectedTeacher) => {
    setTeacher(selectedTeacher);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/subadmin/createclass",
        {
          name,
          code,
          faculty,
          course,
          teacher: teacher.teacherId,
          description,
          credits,
          section,
          startDate,
          endDate,
          batch,
          schedule,
        }
      );

      setData(Array.isArray(data.class) ? data.class : []);
      setname("");
      setcode("");
      setDescription("");
      setSection("");
      setCredits("");
      setStartDate("");
      setEndDate("");
      setBatch("");
      setSchedule([]);
      setModelOpen(false);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  return (
    <div>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className=" overflow-hidden  ">
          <div className="px-4 py-5 bg-white sm:p-6">
            <h2 className="text-2xl mb-6 font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Create Class
            </h2>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                ></label>
                <SelectInputFromData
                  itemName={"Course"}
                  setname={setname}
                  data={courses}
                  onSelect={handleCourseSelect}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  value={description}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <SelectInputFromData
                  itemName={"Add Teacher"}
                  data={teachers}
                  onSelect={handleTeacherSelect}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  faculty
                </label>
                <select
                  name="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={(e) => setFaculty(e.target.value)}
                >
                  {faculties?.map((item, id) => (
                    <option key={id}>{item.faculty}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="batch"
                  className="block text-sm font-medium text-gray-700"
                >
                  Batch
                </label>
                <input
                  type="text"
                  name="batch"
                  value={batch}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                  onChange={(e) => setBatch(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3 flex gap-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Class name
                  </label>
                  <input
                    type="text"
                    name="course name"
                    value={name}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className=" flex-1 ">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Class Code
                  </label>
                  <input
                    type="text"
                    value={code}
                    name="code"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) =>
                      setcode(e.target.value.toLocaleUpperCase())
                    }
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-3 flex  gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Credits
                  </label>
                  <input
                    type="text"
                    name="credit"
                    value={credits}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) => {
                      setCredits(e.target.value);
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Section
                  </label>
                  <input
                    type="text"
                    name="credit"
                    value={section}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) => {
                      setSection(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-span-6 sm:col-span-3 lg:col-span-3 flex  gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="start-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Starting Date
                  </label>
                  <input
                    type="date"
                    name="start-date"
                    value={startDate}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="end-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ending Date
                  </label>
                  <input
                    type="date"
                    name="end-date"
                    value={endDate}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
              {schedule.map((item, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className="col-span-6 sm:col-span-3 lg:col-span-2"
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      Day of Week
                    </label>
                    <select
                      name={`day-of-week-${index}`}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) =>
                        handleDayOfWeekSelect(e.target.value, index)
                      }
                    >
                      <option value="">Select a day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor={`start-time-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start Time
                    </label>
                    <input
                      type="text"
                      name={`start-time-${index}`}
                      value={item.startTime}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                      onChange={(e) =>
                        handleStartTimeChange(e.target.value, index)
                      }
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label
                      htmlFor={`end-time-${index}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      End Time
                    </label>
                    <input
                      type="text"
                      name={`end-time-${index}`}
                      value={item.endTime}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                      onChange={(e) =>
                        handleEndTimeChange(e.target.value, index)
                      }
                    />
                  </div>

                  {index > 0 && (
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveSchedule(index)}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <button
                  type="button"
                  onClick={handleAddSchedule}
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add Schedule
                </button>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateClassForm;
