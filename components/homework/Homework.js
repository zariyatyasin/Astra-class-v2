import React, { useState } from "react";
import { Container, Paper, Divider, Typography, Modal } from "@mui/material";
import { Button } from "@mui/material";
import Table from "../Table/Table";
import Box from "@mui/material/Box";
import HomeworkForm from "./HomeWorkForm";
import EditHomeWork from "./EditHomeWork";
const Homework = () => {
  const columnConfig = [
    { field: "homework", headerName: "Homework", width: 200 },
    { field: "deadline", headerName: "Deadline", width: 200 },
    { field: "priority", headerName: "Priority", width: 120 },
    { field: "actions", headerName: "Actions", width: 300 },
  ];
  const [homeworkList, setHomeworkList] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedHomework, setSelectedHomework] = useState(null);
  const handleCreateHomework = (newHomework) => {
    setHomeworkList([...homeworkList, { ...newHomework, completed: false }]);
  };

  const handleUpdateHomework = (rowData) => {
    setSelectedHomework(rowData);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const handleHomeworkUpdate = (updatedHomework) => {
    const updatedList = homeworkList.map((item) =>
      item.id === updatedHomework.id ? updatedHomework : item
    );
    setHomeworkList(updatedList);
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenModal}
          style={{ marginBottom: "20px" }}
        >
          Add Homework
        </Button>

        <Typography variant="h4" gutterBottom>
          Homework
        </Typography>

        <Divider style={{ margin: "20px 0" }} />

        <Table
          columnConfig={columnConfig}
          data={homeworkList}
          setData={setHomeworkList}
          onEdit={handleUpdateHomework}
        >
          <EditHomeWork
            selectedHomework={selectedHomework}
            onUpdate={handleHomeworkUpdate}
            onClose={handleEditModalClose}
          />
        </Table>
      </Paper>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Add Homework
          </Typography>
          <HomeworkForm
            onSubmit={handleCreateHomework}
            setModalOpen={setModalOpen}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Homework;
