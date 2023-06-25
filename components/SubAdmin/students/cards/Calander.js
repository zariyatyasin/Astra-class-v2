import React, { useState } from "react";
import Calendar from "react-calendar";
const Calander = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="rounded-xl bg-white h-48 p-2 border shadow">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calander;
