import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditHomeworkDialog from "./EditHomeWork";

const HomeworkList = ({
  homeworkList,
  onDelete,
  onEdit,
  totalStudents,
  completedHomeworkCount,
  studentsNotCompleted,
}) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState(null);

  const handleEditClick = (index) => {
    setSelectedHomework(homeworkList[index]);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedHomework(null);
    setDialogOpen(false);
  };

  const handleSaveEditedHomework = (editedHomework) => {
    onEdit(homeworkList.indexOf(selectedHomework), editedHomework);
  };

  const calculateCompletionPercentage = (completedCount) => {
    return totalStudents > 0
      ? Math.round((completedCount / totalStudents) * 100)
      : 0;
  };
  const studentsCompleted = totalStudents - studentsNotCompleted;

  return (
    <>
      {homeworkList.map((homework, index) => {
        return (
          <div key={index}>
            <List>
              <ListItem>
                <ListItemText
                  primary={homework.homework}
                  secondary={`Deadline: ${homework.deadline}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEditClick(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
            <LinearProgress
              variant="determinate"
              value={calculateCompletionPercentage(completedHomeworkCount)}
            />
            <p>{`${studentsCompleted} out of ${totalStudents} students have completed this homework.`}</p>
          </div>
        );
      })}
      <EditHomeworkDialog
        isOpen={isDialogOpen}
        handleClose={handleDialogClose}
        initialHomework={selectedHomework}
        onSave={handleSaveEditedHomework}
      />
    </>
  );
};

export default HomeworkList;
