// Homework.js
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
    setHomeworkList((prevHomeworkList) => [
      ...prevHomeworkList,
      { ...newHomework, completed: false },
    ]);
    handleCloseModal();
  };

  const handleUpdateHomework = (rowData) => {
    setSelectedHomework(rowData);
    setEditModalOpen(true);
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
    console.log("this is updated", updatedHomework);

    setHomeworkList((prevHomeworkList) =>
      prevHomeworkList.map((item) =>
        item.id === updatedHomework.id ? updatedHomework : item
      )
    );
    handleEditModalClose();
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
          onEdit={handleUpdateHomework}
        />

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
            <HomeworkForm onSubmit={handleCreateHomework} />
          </Box>
        </Modal>

        <Modal open={isEditModalOpen} onClose={handleEditModalClose}>
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
            <EditHomeWork
              selectedHomework={selectedHomework}
              onUpdate={handleHomeworkUpdate}
              onClose={handleEditModalClose}
            />
          </Box>
        </Modal>
      </Paper>
    </div>
  );
};

export default Homework;
// EditHomeWork.js
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const EditHomeWork = ({ selectedHomework, onUpdate, onClose }) => {
  const [homeworkData, setHomeworkData] = useState({});

  useEffect(() => {
    setHomeworkData(selectedHomework);
  }, [selectedHomework]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHomeworkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(homeworkData);
    onClose();
  };
  return (
    <div>
      <TextField
        label="Homework"
        name="homework"
        value={homeworkData.homework || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Deadline"
        name="deadline"
        value={homeworkData.deadline || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Priority"
        name="priority"
        value={homeworkData.priority || ""}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Homework
      </Button>
    </div>
  );
};

export default EditHomeWork;
// ReuableTable.js
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
import { Button, Modal } from "@mui/material";

export default function ReuableTable({
  data,
  setData,
  columnConfig,
  children,
  onEdit,
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    handleClose();
  };

  const handleUpdate = (rowData) => {
    setOpen(true);
    onEdit(rowData);
  };

  const handleDelete = async (id) => {
    try {
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      console.log(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}`, error);
    }
  };

  const handleView = (id) => {
    router.push(`/subadmin/editclass/?id=${id}`);
  };

  const renderActionsCell = (params) => (
    <div className="flex item-center justify-center">
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleView(params.row._id)}
      >
        <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleUpdate(params.row)}
      >
        <CreateOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleDelete(params.row._id)}
      >
        <DeleteOutlineOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
    </div>
  );

  const columns = columnConfig.map((column) => ({
    ...column,
    renderCell: column.field === "actions" ? renderActionsCell : undefined,
  }));

  const rows = data?.map((data, index) => ({
    ...data,
    id: index + 1,
  }));

  return (
    <div style={{ height: 400, width: "100%" }} className="bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <Modal open={open} onClose={handleModalClose}>
        <div
          className="flex items-center justify-center h-full"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </Modal>
    </div>
  );
}



////////////////////////////////

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useRouter } from "next/router";
import { Box, IconButton } from "@mui/material";

const Table = ({ data, setData, columnConfig, children, onEdit }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    handleClose();
  };

  const handleUpdate = (rowData) => {
    setOpen(true);
    onEdit(rowData);
  };

  const handleDelete = async (id) => {
    try {
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData);
      console.log(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}`, error);
    }
  };

  const handleView = (id) => {
    router.push(`/subadmin/editclass/?id=${id}`);
  };

  const renderActionsCell = (params) => (
    <div className="flex item-center justify-center">
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleView(params.row._id)}
      >
        <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleUpdate(params.row)}
      >
        <CreateOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
      <IconButton
        className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
        onClick={() => handleDelete(params.row._id)}
      >
        <DeleteOutlineOutlinedIcon sx={{ fontSize: "18px" }} />
      </IconButton>
    </div>
  );

  const columns = columnConfig.map((column) => ({
    ...column,
    renderCell: column.field === "actions" ? renderActionsCell : undefined,
  }));

  const rows = data?.map((data, index) => ({
    ...data,
    id: index + 1,
  }));

  return (
    <div style={{ height: 400, width: "100%" }} className="bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      {children}
    </div>
  );
};

export default Table;
