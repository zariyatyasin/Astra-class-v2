import React, { useState } from "react";
import axios from "axios"; // Assuming you have Axios or another HTTP client library installed

import { Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const HomeworkDetails = ({ homework }) => {
  const [studentStatus, setStudentStatus] = useState(homework?.studentStatus);

  const handleStudentStatusChange = (studentId) => (event) => {
    const updatedStatus = studentStatus.map((student) =>
      student.studentId === studentId
        ? { ...student, done: event.target.checked }
        : student
    );
    setStudentStatus(updatedStatus);
  };

  const handleSaveStatus = async () => {
    try {
      await axios.put(`/api/homework/${homework._id}`, { studentStatus });
      // You would need to adjust the API endpoint ("/api/homework") based on your server setup
      // Make sure the server handles the update operation and saves the studentStatus array in the database
    } catch (error) {
      console.error("Error updating homework status:", error);
    }
  };

  return (
    <div>
      <h2>{homework?.homework}</h2>
      <p>Deadline: {new Date(homework.deadline).toLocaleDateString()}</p>
      <FormGroup>
        {homework?.studentStatus.map((student) => (
          <FormControlLabel
            key={student.studentId}
            control={
              <Checkbox
                checked={student.done}
                onChange={handleStudentStatusChange(student.studentId)}
              />
            }
            label={`Student ${student.studentId}`}
          />
        ))}
      </FormGroup>
      <Button variant="contained" color="primary" onClick={handleSaveStatus}>
        Save Status
      </Button>
    </div>
  );
};

export default HomeworkDetails;
