import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";

const ExamForm = ({ onSubmit, isEditing, handleCancelEdit, initialValues }) => {
  const [examTitle, setExamTitle] = useState(initialValues.title || "");
  const [examDate, setExamDate] = useState(initialValues.date || "");
  const [questionTopic, setQuestionTopic] = useState(initialValues.topic || "");
  const [questionMarks, setQuestionMarks] = useState(initialValues.marks || 0);

  useEffect(() => {
    setExamTitle(initialValues.title || "");
    setExamDate(initialValues.date || "");
    setQuestionTopic(initialValues.topic || "");
    setQuestionMarks(initialValues.marks || 0);
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: examTitle,
      date: examDate,
      topic: questionTopic,
      marks: questionMarks,
    };
    onSubmit(formData);
    setExamTitle("");
    setExamDate("");
    setQuestionTopic("");
    setQuestionMarks(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {isEditing ? "Update Question" : "Add Question"}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Question Title"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date"
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Topic"
            value={questionTopic}
            onChange={(e) => setQuestionTopic(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Marks"
            type="number"
            value={questionMarks}
            onChange={(e) => setQuestionMarks(e.target.value)}
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
      {isEditing ? (
        <div style={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button
            variant="contained"
            color="error"
            onClick={handleCancelEdit}
            sx={{ mr: 2 }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Add Question
          </Button>
        </div>
      )}
    </form>
  );
};

export default ExamForm;
