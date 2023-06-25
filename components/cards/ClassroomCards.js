import React, { useEffect, useState } from "react";

export const ClassroomCards = () => {
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    generateColor();
  }, []);

  const generateColor = () => {
    let randomColor;
    do {
      randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    } while (isColorDark(randomColor) || randomColor === "#ffffff");
    setColor(randomColor);
  };

  const isColorDark = (color) => {
    const hex = color.slice(1);
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
  };

  return (
    <div>
      <div className="shadow p-4 rounded-md bg-white">
        <div className="flex justify-center relative rounded-md overflow-hidden h-40">
          <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1190547941/photo/group-of-happy-high-school-students-in-a-hallway.jpg?s=612x612&w=0&k=20&c=DIBvBpudzMK4M68xoT0_GlSdr-MaEFWTuEzcXl24HdU="
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </div>

          <div className="absolute flex justify-center bottom-0 mb-3">
            <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
              <p className="flex items-center font-medium text-gray-800">2</p>

              <p className="flex items-center font-medium text-gray-800">3</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2
            className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
            title="New York"
          >
            Statue of Liberty
          </h2>
          <p
            className="mt-2 text-sm text-gray-800 line-clamp-1"
            title="New York, NY 10004, United States"
          >
            New York, NY 10004, United States
          </p>
        </div>
      </div>
    </div>
  );
};
