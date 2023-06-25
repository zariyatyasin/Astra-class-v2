import React, { useEffect, useState } from "react";
import SelcetInput from "../inputs/selcetInput";
import { toast } from "react-toastify";
import axios from "axios";
const UpdateCourseForm = ({
  faculties,
  courseId,
  courseList,
  setData,
  setOpen,
}) => {
  const [name, setname] = useState();
  const [code, setcode] = useState();
  const [description, setDescription] = useState();
  const [faculty, setFaculty] = useState();
  const [credits, setCredits] = useState();
  const [prerequisites, setPrerequisites] = useState();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setAmount(credits * 3000);
  }, [credits]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put("/api/subadmin/course", {
        id: courseId,
        name,
        amount,
        code,
        description,
        faculty,
        credits,
        prerequisites,
      });

      setData(Array.isArray(data.courses) ? data.courses : []);
      setOpen(false);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className=" overflow-hidden  ">
          <div className="px-4 py-5 bg-white sm:p-6">
            <h2 class="text-2xl mb-6 font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Update course
            </h2>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course name
                </label>
                <input
                  type="text"
                  name="course name"
                  value={name}
                  id="first-name"
                  autocomplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Course Code
                </label>
                <input
                  type="text"
                  name="code"
                  value={code}
                  autocomplete="family-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                  onChange={(e) => setcode(e.target.value)}
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
                <SelcetInput
                  setPrerequisites={setPrerequisites}
                  data={courseList}
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
                  {faculties.map((item, id) => (
                    <option key={id}>{item.faculty}</option>
                  ))}
                </select>
              </div>

              <div className="col-span-3 sm:col-span-3 lg:col-span-3">
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
                  autocomplete="address-level2"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border p-2"
                  onChange={(e) => setCredits(e.target.value)}
                />
                <div className="mt-2">
                  <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {amount} tk
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourseForm;
