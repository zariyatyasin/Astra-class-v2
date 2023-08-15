// ExamList.js
import React from "react";

const ExamList = ({ examQuestions, handleEdit, handleDelete }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        overflowY: "auto",
        maxHeight: "500px",
        margin: "0 auto",
      }}
    >
      {examQuestions.map((question) => (
        <div
          key={question.id}
          className="w-full h-64 flex flex-col justify-between bg-pink-300 rounded-lg border border-pink-300 mb-6 py-5 px-4"
        >
          <div>
            <h4 className="text-gray-800 font-bold mb-3">{question.title}</h4>
            <p className="text-gray-800 text-sm">{question.topic}</p>
          </div>
          <div className="flex items-center justify-between text-gray-800">
            <p className="text-sm">{question.date}</p>
            <div className="flex space-x-2">
              <button
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                aria-label="edit note"
                onClick={() => handleEdit(question.id)}
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-pencil"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* ... SVG path ... */}
                </svg>
              </button>
              <button
                className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                aria-label="delete note"
                onClick={() => handleDelete(question.id)}
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trash"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* ... SVG path ... */}
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamList;
