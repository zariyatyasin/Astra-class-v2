import React from "react";

const FeaturesCard = ({ icon, title, number, color, dis }) => {
  return (
    <div>
      <div className="flex items-start rounded bg-white p-4  border">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full border border-${color}-100 bg-${color}-50 text-${color}-600`}
        >
          {icon}
        </div>

        <div className="ml-4">
          <h2 className="">
            {number} {title}
          </h2>
          <p className="mt-2 text-sm text-gray-500">{dis}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
