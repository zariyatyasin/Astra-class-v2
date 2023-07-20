import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const HomeworkForm = ({ onSubmit, setModalOpen }) => {
  const [homework, setHomework] = useState("");
  const [deadline, setDeadline] = useState("");
  const [deadlineDisplay, setDeadlineDisplay] = useState("");
  const [priority, setPriority] = useState("normal");

  const handleHomeworkChange = (e) => {
    setHomework(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    const inputDate = new Date(e.target.value);
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    setDeadline(formattedDate);

    const isoFormattedDate = inputDate.toISOString().slice(0, 16);
    setDeadlineDisplay(isoFormattedDate);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleCancel = (e) => {
    setModalOpen(false);
  };

  const handleSubmit = () => {
    onSubmit({ homework, deadline, priority, completed: false });
    setModalOpen(false);
    setHomework("");
    setDeadline("");
    setDeadlineDisplay("");
    setPriority("normal");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Homework"
          fullWidth
          value={homework}
          onChange={handleHomeworkChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Deadline"
          type="datetime-local"
          fullWidth
          value={deadlineDisplay}
          onChange={handleDeadlineChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select value={priority} onChange={handlePriorityChange}>
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Homework
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: "20px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default HomeworkForm;
