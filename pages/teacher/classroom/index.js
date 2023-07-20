// index.js
import React, { useState } from "react";
import TeacherLayout from "@/components/layout/TeacherLayout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Homework from "@/components/homework/HomeWork";

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

const Index = ({ classObj, users }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TeacherLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Overview" />
              <Tab label="Homework" />
              <Tab label="Class Post" />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            overview
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Homework />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </TeacherLayout>
  );
};

export default Index;
