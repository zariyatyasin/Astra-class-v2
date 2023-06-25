import Link from "next/link";
import React, { useState } from "react";

const JoinPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [classroomCode, setClassroomCode] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setClassroomCode("");
  };

  const handleClassroomCodeChange = (e) => {
    setClassroomCode(e.target.value);
  };

  const handleJoinClassroom = () => {
    // Handle the join classroom logic here
    console.log("Joining classroom with code:", classroomCode);

    // Close the modal
    handleModalClose();
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-indigo-600 text-center mb-4">
            Haven't Joined Yet?
          </h1>
          <p className="text-base text-gray-500 text-center mb-8">
            Explore and join classes or find a school to get started!
          </p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleModalOpen}
              className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join a Class
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Find a School
            </a>
            <Link
              href="/campusfeed"
              className="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:text-indigo-600"
            >
              Or go to Campus Feed
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="absolute -z-10 inset-0 bg-gray-900 opacity-50"
            onClick={handleModalClose}
          ></div>
          <div className="max-w-sm w-full bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Enter Classroom Code</h2>
              <button
                onClick={handleModalClose}
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.64 3.64a.5.5 0 01-.707.708L10 10.707l-3.64 3.64a.5.5 0 01-.708-.708L9.293 10l-3.64-3.64a.5.5 0 11.707-.707L10 9.293l3.64-3.64a.5.5 0 01.708 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <input
              type="text"
              value={classroomCode}
              onChange={handleClassroomCodeChange}
              className="border border-gray-300 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter the classroom code"
            />
            <button
              onClick={handleJoinClassroom}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Join Classroom
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinPage;
