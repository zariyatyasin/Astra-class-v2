import React, { useState } from "react";
import { TextField, Button, Typography, IconButton } from "@mui/material";

import "@mui/material";
import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
const index = () => {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");
  const [routine, setRoutine] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddClass = () => {
    const newClass = {
      name: className,
      routine: routine,
    };

    setClasses([...classes, newClass]);
    setClassName("");
    setRoutine("");
  };

  const handleEditClass = (index) => {
    setEditIndex(index);
    setClassName(classes[index].name);
    setRoutine(classes[index].routine);
  };

  const handleUpdateClass = () => {
    const updatedClasses = [...classes];
    updatedClasses[editIndex] = {
      name: className,
      routine: routine,
    };

    setClasses(updatedClasses);
    setEditIndex(-1);
    setClassName("");
    setRoutine("");
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
    setClassName("");
    setRoutine("");
  };

  const handleDeleteClass = (index) => {
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);

    setClasses(updatedClasses);
  };

  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <Typography variant="h4" className="mb-4">
          Class Routine Creator
        </Typography>

        <div className="flex mb-4">
          <TextField
            label="Class Name"
            variant="outlined"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <TextField
            label="Routine"
            variant="outlined"
            value={routine}
            onChange={(e) => setRoutine(e.target.value)}
          />
          {editIndex === -1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddClass}
            >
              Add Class
            </Button>
          ) : (
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdateClass}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap">
          {classes.map((c, index) => (
            <div key={index} className="p-4 border rounded-lg mr-4 mb-4">
              <Typography variant="h6">{c.name}</Typography>
              {editIndex === index ? (
                <div>
                  <TextField
                    label="Class Name"
                    variant="outlined"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                  />
                  <TextField
                    label="Routine"
                    variant="outlined"
                    value={routine}
                    onChange={(e) => setRoutine(e.target.value)}
                  />
                </div>
              ) : (
                <Typography>{c.routine}</Typography>
              )}
              <div className="mt-2">
                {editIndex === index ? (
                  <div>
                    <IconButton
                      color="primary"
                      onClick={() => handleUpdateClass(index)}
                    >
                      save
                    </IconButton>
                    <IconButton color="secondary" onClick={handleCancelEdit}>
                      cancle
                    </IconButton>
                  </div>
                ) : (
                  <div>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditClass(index)}
                    >
                      edit
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => handleDeleteClass(index)}
                    >
                      delete
                    </IconButton>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default index;
