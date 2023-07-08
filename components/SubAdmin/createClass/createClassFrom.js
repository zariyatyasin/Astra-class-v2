import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import SelectInputFromData from "@/components/inputs/SelectInputCourse";

const CreateClassForm = ({
  teachers,
  courses,
  faculties,
  initialData,
  batches,
  setData,
  setModelOpen,
}) => {
  const [selectedTeacher, setSelectedTeacher] = useState({ id: "", name: "" });
  const [selectedBatch, setSelectedBatch] = useState({ id: "", name: "" });
  console.log("hello is nis", initialData);
  const [classData, setClassData] = useState({
    name: "",
    code: "",
    description: "",
    faculty: "",
    credits: "",
    section: "",
    course: "",
    maxCapacity: "",
    startDate: "",
    endDate: "",

    schedule: [],
  });

  const handleDayOfWeekSelect = (selectedDayOfWeek, index) => {
    setClassData((prevData) => {
      const updatedSchedule = [...prevData.schedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        dayOfWeek: selectedDayOfWeek,
      };
      return { ...prevData, schedule: updatedSchedule };
    });
  };

  const handleStartTimeChange = (startTime, index) => {
    setClassData((prevData) => {
      const updatedSchedule = [...prevData.schedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        startTime,
      };
      return { ...prevData, schedule: updatedSchedule };
    });
  };

  const handleEndTimeChange = (endTime, index) => {
    setClassData((prevData) => {
      const updatedSchedule = [...prevData.schedule];
      updatedSchedule[index] = {
        ...updatedSchedule[index],
        endTime,
      };
      return { ...prevData, schedule: updatedSchedule };
    });
  };

  const handleAddSchedule = () => {
    setClassData((prevData) => ({
      ...prevData,
      schedule: [
        ...prevData.schedule,
        { dayOfWeek: "", startTime: "", endTime: "" },
      ],
    }));
  };

  const handleRemoveSchedule = (index) => {
    setClassData((prevData) => {
      const updatedSchedule = [...prevData.schedule];
      updatedSchedule.splice(index, 1);
      return { ...prevData, schedule: updatedSchedule };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/subadmin/createclass",
        {
          batch: {
            batchId: selectedBatch.id,
            batchName: selectedBatch.name,
          },
          teacher: {
            teacherId: selectedTeacher.id,
            teacherName: selectedTeacher.name,
          },

          ...classData,
        }
      );

      setData(Array.isArray(data.class) ? data.class : []);
      setClassData({
        name: "",
        code: "",
        description: "",
        faculty: faculties[0]?.faculty,
        credits: "",
        section: "",
        course: "",
        maxCapacity: "",
        startDate: "",
        endDate: "",

        schedule: [],
      });
      setSelectedTeacher({ id: "", name: "" });
      setSelectedBatch({ id: "", name: "" });
      setModelOpen(false);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="px-4 py-5 bg-white sm:p-6">
          <h2 className="text-2xlmb-6 font-semibold tracking-tight text-gray-900sm:text-3xl">
            Create Class
          </h2>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="course">Course</InputLabel>
                <Select
                  id="course"
                  value={classData.course ?? ""}
                  onChange={(e) =>
                    setClassData({
                      ...classData,
                      course: e.target.value,
                    })
                  }
                  label="Course"
                >
                  {courses?.map((item, id) => (
                    <MenuItem key={id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                defaultValue={initialData?.description || ""}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    description: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="teacher">Add Teacher</InputLabel>
                <Select
                  id="teacher"
                  value={selectedTeacher.id}
                  onChange={(e) => {
                    const selectedTeacherId = e.target.value;
                    const selectedTeacherData = teachers.find(
                      (teacher) => teacher._id === selectedTeacherId
                    );
                    setSelectedTeacher({
                      id: selectedTeacherId,
                      name: selectedTeacherData ? selectedTeacherData.name : "",
                    });
                  }}
                  label="Add Teacher"
                >
                  {teachers?.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="faculty">Faculty</InputLabel>
                <Select
                  id="faculty"
                  value={classData.faculty ?? " "}
                  onChange={(e) =>
                    setClassData({
                      ...classData,
                      faculty: e.target.value,
                    })
                  }
                  label="Faculty"
                >
                  {faculties?.map((item, id) => (
                    <MenuItem key={id} value={item.faculty}>
                      {item.faculty}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="batch">Batch</InputLabel>
                <Select
                  id="batch"
                  value={selectedBatch.id}
                  onChange={(e) => {
                    const selectedBatchId = e.target.value;
                    const selectedBatchData = batches.find(
                      (teacher) => teacher._id === selectedBatchId
                    );
                    setSelectedBatch({
                      id: selectedBatchId,
                      name: selectedBatchData
                        ? selectedBatchData.batchName
                        : "",
                    });
                  }}
                  label="Batch"
                >
                  {batches?.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.batchName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="maxCapacity"
                label="Max Students"
                variant="outlined"
                value={classData.maxCapacity}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    maxCapacity: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                id="class-name"
                label="Class name"
                variant="outlined"
                value={classData.name}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    name: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="class-code"
                label="Class Code"
                variant="outlined"
                value={classData.code}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    code: e.target.value.toLocaleUpperCase(),
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="credits"
                label="Credits"
                variant="outlined"
                value={classData.credits}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    credits: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="section"
                label="Section"
                variant="outlined"
                value={classData.section}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    section: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="start-date"
                label="Starting Date"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={classData.startDate}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    startDate: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id="end-date"
                label="Ending Date"
                InputLabelProps={{ shrink: true }}
                type="date"
                variant="outlined"
                value={classData.endDate}
                onChange={(e) =>
                  setClassData({
                    ...classData,
                    endDate: e.target.value,
                  })
                }
                fullWidth
              />
            </Grid>
          </Grid>
          <div className="mt-5">
            <Grid container spacing={3}>
              {classData.schedule.map((item, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} sm={3}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel htmlFor={`dayOfWeek-${index}`}>
                        Day of Week
                      </InputLabel>
                      <Select
                        id={`dayOfWeek-${index}`}
                        value={item.dayOfWeek}
                        onChange={(e) =>
                          handleDayOfWeekSelect(e.target.value, index)
                        }
                        label="Day of Week"
                      >
                        <MenuItem value={"Monday"}>Monday</MenuItem>
                        <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                        <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                        <MenuItem value={"Thursday"}>Thursday</MenuItem>
                        <MenuItem value={"Friday"}>Friday</MenuItem>
                        <MenuItem value={"Saturday"}>Saturday</MenuItem>
                        <MenuItem value={"Sunday"}>Sunday</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField
                      id={`startTime-${index}`}
                      label="Start Time"
                      type="time"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      value={item.startTime}
                      onChange={(e) =>
                        handleStartTimeChange(e.target.value, index)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      id={`endTime-${index}`}
                      label="End Time"
                      type="time"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      value={item.endTime}
                      onChange={(e) =>
                        handleEndTimeChange(e.target.value, index)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveSchedule(index)}
                    >
                      Remove
                    </Button>
                  </Grid>
                </React.Fragment>
              ))}
              <Grid item xs={12}>
                <div className="">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleAddSchedule}
                  >
                    Add Schedule
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>

          <div className="mt-6">
            <Button type="submit" variant="contained" color="primary">
              {initialData ? "Update" : "Create"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateClassForm;
