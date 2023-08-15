import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Exam = () => {
  const [examTitle, setExamTitle] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examQuestions, setExamQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editQuestionId, setEditQuestionId] = useState(null);
  const [questionTopic, setQuestionTopic] = useState("");
  const [questionMarks, setQuestionMarks] = useState(0);

  const handleEdit = (questionId) => {
    const questionToEdit = examQuestions.find(
      (question) => question.id === questionId
    );
    if (questionToEdit) {
      setEditQuestionId(questionId);
      setExamTitle(questionToEdit.title);
      setExamDate(questionToEdit.date);
      setQuestionTopic(questionToEdit.topic);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditQuestionId(null);
    setExamTitle("");
    setExamDate("");
    setQuestionTopic("");
    setQuestionMarks(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editQuestionId !== null) {
      const updatedQuestion = {
        id: editQuestionId,
        title: examTitle,
        date: examDate,
        topic: questionTopic,
        marks: questionMarks,
      };
      setExamQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === editQuestionId ? updatedQuestion : question
        )
      );
      handleCancelEdit();
    } else {
      const newQuestion = {
        id: Date.now(),
        title: examTitle,
        date: examDate,
        topic: questionTopic,
        marks: questionMarks,
      };
      setExamQuestions([...examQuestions, newQuestion]);
      setExamTitle("");
      setExamDate("");
      setQuestionTopic("");
      setQuestionMarks(0);
    }
  };

  const handleDelete = (questionId) => {
    setExamQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.id !== questionId)
    );
  };

  const handleMarkChange = (newMarks) => {
    setQuestionMarks(newMarks);
  };

  const renderQuestionList = () => {
    return examQuestions.map((question) => (
      <Card key={question.id} className="my-4">
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <AccessTimeIcon fontSize="small" />
            {question.date}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className="text-blue-600 font-semibold"
          >
            {question.title}
          </Typography>
          <Typography className="text-gray-700">
            Topic: {question.topic}
          </Typography>
          <Typography className="text-gray-700">
            Marks: {question.marks}
          </Typography>
        </CardContent>
        {isEditing && editQuestionId === question.id ? (
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(question.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(question.id)}
            >
              Delete
            </Button>
          </CardActions>
        )}
      </Card>
    ));
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", maxWidth: "600px" }}
      >
        <Typography variant="h5" className="text-2xl font-bold">
          {isEditing ? "Update Question" : "Add Question"}
        </Typography>
        <TextField
          label="Question Title"
          value={examTitle}
          onChange={(e) => setExamTitle(e.target.value)}
          fullWidth
          variant="outlined"
          className="input-field"
        />
        <TextField
          label="Date"
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          className="input-field"
        />
        <TextField
          label="Topic"
          value={questionTopic}
          onChange={(e) => setQuestionTopic(e.target.value)}
          fullWidth
          variant="outlined"
          className="input-field"
        />
        <TextField
          label="Marks"
          type="number"
          value={questionMarks}
          onChange={(e) => handleMarkChange(e.target.value)}
          fullWidth
          variant="outlined"
          className="input-field"
        />
        {isEditing ? (
          <div className="action-buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </div>
        ) : (
          <Button type="submit" variant="contained" color="primary">
            Add Question
          </Button>
        )}
      </form>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          overflowY: "auto",
          maxHeight: "500px",
        }}
      >
        <div className="question-list">{renderQuestionList()}</div>
      </div>
    </Container>
  );
};

export default Exam;
