import React from "react";

const BankCard = () => {
  return (
    <div className="rounded-xl bg-indigo-600 w-full h-full  text-white">
      <div className="mb-4 flex items-center justify-between">
        <div className=" bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
            ></path>
          </svg>
        </div>
        <h1 className="ext-center text-3xl font-semibold">Slice</h1>
        <div className="rounded-lg bg-indigo-50/30 p-3 hover:bg-white hover:text-indigo-500">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <div className="text-slate-200">
          <svg
            className="mr-1 inline h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          <span>2s ago</span>
        </div>
        <div className="text-4xl font-bold tracking-wider">239.8</div>
        <div className="text-slate-200">$0.24 - 1,112 Sats</div>
      </div>
    </div>
  );
};

export default BankCard;
