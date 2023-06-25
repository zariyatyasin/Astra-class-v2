import React from "react";
import { Education } from "./Education";
import Projectpage from "./Projectpage";

const UserProfileHomePage = () => {
  return (
    <div className="max-w-3xl mx-auto  lg:max-w-7xl  ">
      <div className="max-w-3xl  grid grid-cols-1 gap-4 lg:col-span-2">
        <Education />
        <Projectpage />
      </div>
    </div>
  );
};

export default UserProfileHomePage;
