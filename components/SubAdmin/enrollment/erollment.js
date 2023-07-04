import { toast } from "react-toastify";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import axios from "axios";
const EnrollmentSubadmin = ({ faculties, accessEnrollment }) => {
  const [enrollmentActive, setenrollmentActive] = useState(
    accessEnrollment[0]?.enrollmentActive
  );
  const [selectedFaculties, setSelectedFaculties] = useState([]);
  const [name, setName] = useState("");
  const [description, setdescription] = useState("");

  console.log(accessEnrollment);

  const [onHoverOpen, setOnHoverOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  console.log(date[0].endDate);

  const handleToggle = () => {
    setenrollmentActive((prevState) => !prevState);
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFaculties((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedFaculties((prevSelected) =>
        prevSelected.filter((selected) => selected !== value)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:3000/api/subadmin/accessenrollment",
        {
          name,
          description,
          endDate: date[0].endDate,
          selectedFaculties,
          enrollmentActive,
        }
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <main className=" mx-auto rounded-md pt-9  h-screen   bg-white">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <h1 className="text-lg leading-6 font-medium text-gray-900">
                Enrollment
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Let’s get started by filling in the inhtmlFormation below to
                create your new Enrollment.
              </p>
            </div>

            <div>
              <label
                htmlFor="project-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="project-name"
                  id="project-name"
                  className="block w-full border p-2 shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  className="block p-2 w-full shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm border border-gray-300 rounded-md"
                  onChange={(e) => setdescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="tags"
                className="block mb-4 text-sm font-medium text-gray-700"
              >
                Ending Date
              </label>
              <div
                className="border p-4 mt-2"
                onMouseEnter={() => setOnHoverOpen(true)}
                onMouseLeave={() => setOnHoverOpen(false)}
              >
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
                <div
                  className={`${
                    onHoverOpen ? "block" : "hidden"
                  } absolute z-10`}
                >
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-y-1">
                <label
                  htmlFor="add-team-members"
                  className="block text-sm font-medium text-gray-700"
                >
                  Add Faculty
                </label>

                <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
                  {faculties.map((item, id) => (
                    <div className="relative flex items-start py-4" key={id}>
                      <div className="min-w-0 flex-1 text-sm">
                        <label
                          htmlFor={`faculty-${id}`}
                          className="text-gray-700 select-none"
                        >
                          {item.faculty}
                        </label>
                      </div>
                      <div className="ml-3 flex items-center h-5">
                        <input
                          id={`faculty-${id}`}
                          name={`faculty-${id}`}
                          type="checkbox"
                          value={item.faculty}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <fieldset>
              <div className="flex items-center justify-between">
                <span className="flex-grow flex flex-col">
                  <span
                    className="text-sm font-medium text-gray-900"
                    id="availability-label"
                  >
                    Active Enrollment
                  </span>
                  <span
                    className="text-sm text-gray-500"
                    id="availability-description"
                  >
                    This will active the Enrollment Feature's on Student panel
                  </span>
                </span>
                <button
                  type="button"
                  className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    enrollmentActive ? "bg-indigo-600" : "bg-gray-200"
                  }`}
                  role="switch"
                  aria-checked={enrollmentActive}
                  aria-labelledby="availability-label"
                  aria-describedby="availability-description"
                  onClick={handleToggle}
                >
                  <span
                    aria-hidden="true"
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow transhtmlForm ring-0 transition ease-in-out duration-200 ${
                      enrollmentActive ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </fieldset>

            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EnrollmentSubadmin;
