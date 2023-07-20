// EditHomeWork.js
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const EditHomeWork = ({ selectedHomework, onUpdate, onClose }) => {
  const [homeworkData, setHomeworkData] = useState(selectedHomework);

  useEffect(() => {
    setHomeworkData(selectedHomework);
  }, [selectedHomework]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHomeworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(homeworkData);
    onClose();
  };

  return (
    <div>
      <TextField
        label="Homework"
        name="homework"
        value={homeworkData.homework}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Deadline"
        name="deadline"
        value={homeworkData.deadline}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Priority"
        name="priority"
        value={homeworkData.priority}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Homework
      </Button>
    </div>
  );
};

export default EditHomeWork;
