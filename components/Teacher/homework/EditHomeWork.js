import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";

const EditHomeWork = ({ open, setOpen, initialData, setData }) => {
  const [editedData, setEditedData] = useState({ ...initialData });

  const handleFieldChange = (field, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // You can perform additional validation if needed
    setData((prevData) =>
      prevData.map((data) =>
        data._id === initialData._id ? { ...editedData } : data
      )
    );
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Edit Homework
      </Typography>
      <TextField
        label="Homework"
        value={editedData.homework}
        onChange={(e) => handleFieldChange("homework", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Deadline"
        value={editedData.deadline}
        onChange={(e) => handleFieldChange("deadline", e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Priority"
        value={editedData.priority}
        onChange={(e) => handleFieldChange("priority", e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
      <Button variant="contained" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default EditHomeWork;
