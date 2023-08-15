import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
} from "@mui/material";
import { Typography, Paper } from "@mui/material";

const LecturePlanTimeline = ({ lecturePlans }) => {
  return (
    <Timeline align="alternate">
      {lecturePlans.map((lecturePlan) => (
        <TimelineItem key={lecturePlan.id}>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} sx={{ padding: "6px 16px" }}>
              <Typography variant="h6" component="h1" gutterBottom>
                {lecturePlan.lectureTitle}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Date: {lecturePlan.lectureDate} | Time:{" "}
                {lecturePlan.lectureTime}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Topic: {lecturePlan.lectureTopic}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default LecturePlanTimeline;
