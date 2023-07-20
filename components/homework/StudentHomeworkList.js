// src/components/StudentHomeworkList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Chip,
} from "@mui/material";
import { formatDistanceToNow } from "date-fns";

const StudentHomeworkList = ({
  homeworkList,
  onTaskComplete,
  filter,
  setFilter,
}) => {
  const filteredHomework = homeworkList.filter((homework) => {
    if (filter === "all") return true;
    if (filter === "completed") return homework.completed;
    return !homework.completed;
  });

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Chip
          label="All"
          color={filter === "all" ? "primary" : "default"}
          onClick={() => setFilter("all")}
          style={{ marginRight: "5px" }}
        />
        <Chip
          label="Completed"
          color={filter === "completed" ? "primary" : "default"}
          onClick={() => setFilter("completed")}
          style={{ marginRight: "5px" }}
        />
        <Chip
          label="Pending"
          color={filter === "pending" ? "primary" : "default"}
          onClick={() => setFilter("pending")}
        />
      </div>
      <List>
        {filteredHomework.map((homework, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={homework.homework}
              secondary={
                <>
                  <div>{`Deadline: ${homework.deadline} (${formatDistanceToNow(
                    new Date(homework.deadline),
                    {
                      addSuffix: true,
                    }
                  )})`}</div>
                  <div>
                    Priority:{" "}
                    <Chip
                      label={homework.priority}
                      color="primary"
                      size="small"
                    />
                  </div>
                </>
              }
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={homework.completed}
                onChange={() => onTaskComplete(index)}
                color="primary"
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StudentHomeworkList;
