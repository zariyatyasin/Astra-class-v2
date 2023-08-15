import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const LecturePlanForm = () => {
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureDate, setLectureDate] = useState("");
  const [lectureTopic, setLectureTopic] = useState("");
  const [lecturePlans, setLecturePlans] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editLectureId, setEditLectureId] = useState(null);

  const handleEdit = (lectureId) => {
    const lectureToEdit = lecturePlans.find(
      (lecture) => lecture.id === lectureId
    );
    if (lectureToEdit) {
      setEditLectureId(lectureId);
      setLectureTitle(lectureToEdit.title);
      setLectureDate(lectureToEdit.date);
      setLectureTopic(lectureToEdit.topic);
      setIsEditing(true);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditLectureId(null);
    setLectureTitle("");
    setLectureDate("");
    setLectureTopic("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing && editLectureId !== null) {
      const updatedLecturePlan = {
        id: editLectureId,
        title: lectureTitle,
        date: lectureDate,
        topic: lectureTopic,
        isDone: lecturePlans.find((lecture) => lecture.id === editLectureId)
          .isDone,
      };
      setLecturePlans((prevLecturePlans) =>
        prevLecturePlans.map((lecture) =>
          lecture.id === editLectureId ? updatedLecturePlan : lecture
        )
      );
      handleCancelEdit();
    } else {
      const newLecturePlan = {
        id: Date.now(),
        title: lectureTitle,
        date: lectureDate,
        topic: lectureTopic,
        isDone: false,
      };
      setLecturePlans([...lecturePlans, newLecturePlan]);
      setLectureTitle("");
      setLectureDate("");
      setLectureTopic("");
    }
  };

  const handleDone = (lectureId) => {
    setLecturePlans((prevLecturePlans) =>
      prevLecturePlans.map((lecture) =>
        lecture.id === lectureId ? { ...lecture, isDone: true } : lecture
      )
    );
  };
  const handleDelete = (lectureId) => {
    setLecturePlans((prevLecturePlans) =>
      prevLecturePlans.filter((lecture) => lecture.id !== lectureId)
    );
  };

  const handleUndone = (lectureId) => {
    setLecturePlans((prevLecturePlans) =>
      prevLecturePlans.map((lecture) =>
        lecture.id === lectureId ? { ...lecture, isDone: false } : lecture
      )
    );
  };
  const renderTodoList = () => {
    return lecturePlans.map((lecture) => (
      <Card key={lecture.id} className="my-4">
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            <AccessTimeIcon fontSize="small" />
            {lecture.date}
          </Typography>
          <Typography
            variant="h6"
            component="h2"
            className={
              lecture.isDone
                ? "line-through text-blue-600 font-semibold"
                : "text-blue-600 font-semibold"
            }
          >
            {lecture.title}
          </Typography>
          <Typography className="text-gray-700">{lecture.topic}</Typography>
        </CardContent>
        {isEditing && editLectureId === lecture.id ? (
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
        ) : lecture.isDone ? (
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleUndone(lecture.id)}
            >
              Undone
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(lecture.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(lecture.id)}
            >
              Delete
            </Button>
          </CardActions>
        ) : (
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleDone(lecture.id)}
            >
              Done
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleEdit(lecture.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(lecture.id)}
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
          {isEditing ? "Update Lecture Plan" : "Create Lecture Plan"}
        </Typography>
        <TextField
          label="Lecture Title"
          value={lectureTitle}
          onChange={(e) => setLectureTitle(e.target.value)}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Date"
          type="date"
          value={lectureDate}
          onChange={(e) => setLectureDate(e.target.value)}
          fullWidth
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Topic"
          value={lectureTopic}
          onChange={(e) => setLectureTopic(e.target.value)}
          fullWidth
          variant="outlined"
        />
        {isEditing ? (
          <div>
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
            Create Lecture Plan
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
        <div>{renderTodoList()}</div>
      </div>
    </Container>
  );
};

export default LecturePlanForm;
