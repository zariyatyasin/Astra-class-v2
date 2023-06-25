import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CreateClassList = ({ data }) => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teacherIds = data.map((item) => item.teacher);

        const teachersData = await Promise.all(
          teacherIds.map((teacherId) =>
            axios.get(`http://localhost:3000/api/teacher/${teacherId}`)
          )
        );
        setTeachers(teachersData.map((response) => response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeachers();
  }, [data]);

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200 ">
        {data?.map((item, id) => (
          <li key={id}>
            <Link
              href={`/subadmin/editclass/?id=${item._id}`}
              className="block hover:bg-gray-50"
            >
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {item.name}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        {teachers.length > 0 &&
                          teachers.find(
                            (teacher) => teacher?._id === item.teacher
                          )?.username}
                      </p>
                    </div>
                    <div className="hidden sm:block">
                      <div>
                        <p className="text-sm text-gray-900">
                          Applied on January 7, 2020
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <svg
                            className={`flex-shrink-0 mr-1.5 h-5 w-5 ${
                              item.isActive ? "text-green-400" : "text-red-400"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Completed phone screening
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateClassList;
