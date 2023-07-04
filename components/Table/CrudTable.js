import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const initialRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Crudtable() {
  const [rows, setRows] = useState(initialRows);
  const [editingRow, setEditingRow] = useState(null);
  const [originalRow, setOriginalRow] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleRowAdd = () => {
    const newId = rows.length + 1;
    const newRow = {
      id: newId,
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    setRows((prevRows) => [...prevRows, newRow]);
    setAddModalOpen(false);
    setNewFirstName("");
    setNewLastName("");
    setNewAge("");
  };

  const handleRowUpdate = (updatedRow) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === updatedRow.id ? updatedRow : row))
    );
  };

  const handleRowDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleRowEdit = (row) => {
    setOriginalRow(row);
    setEditingRow(row);
    setEditModalOpen(true);
  };

  const handleRowSave = (updatedRow) => {
    setEditingRow(null);
    setOriginalRow(null);
    handleRowUpdate(updatedRow);
    setEditModalOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingRow(null);
    setOriginalRow(null);
    setEditModalOpen(false);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
    setNewFirstName("");
    setNewLastName("");
    setNewAge("");
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: true,
    },
    { field: "lastName", headerName: "Last name", width: 130, editable: true },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <div>
          <button onClick={() => handleRowDelete(params.row.id)}>Delete</button>
          {editingRow && editingRow.id === params.row.id ? (
            <div>
              <button onClick={() => handleRowSave(params.row)}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => handleRowEdit(params.row)}>Edit</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div
      style={{ height: 400, width: "100%" }}
      className="bg-white p-4 shadow rounded-lg"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
        onCellEditCommit={(params) => {
          const field = params.field;
          const updatedRow = { ...params.row, [field]: params.value };
          handleRowUpdate(updatedRow);
        }}
      />
      <Button variant="contained" onClick={openAddModal}>
        Add
      </Button>
      <Dialog open={isAddModalOpen} onClose={closeAddModal}>
        <DialogTitle>Add Row</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Age"
            value={newAge}
            onChange={(e) => setNewAge(e.target.value)}
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAddModal}>Cancel</Button>
          <Button onClick={handleRowAdd}>Add</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isEditModalOpen} onClose={handleCancelEdit}>
        <DialogTitle>Edit Row {editingRow ? editingRow.id : ""}</DialogTitle>
        <DialogContent>
          <TextField
            label="First Name"
            value={editingRow ? editingRow.firstName : ""}
            onChange={(e) =>
              setEditingRow((prevRow) => ({
                ...prevRow,
                firstName: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            label="Last Name"
            value={editingRow ? editingRow.lastName : ""}
            onChange={(e) =>
              setEditingRow((prevRow) => ({
                ...prevRow,
                lastName: e.target.value,
              }))
            }
            fullWidth
            required
          />
          <TextField
            label="Age"
            value={editingRow ? editingRow.age : ""}
            onChange={(e) =>
              setEditingRow((prevRow) => ({
                ...prevRow,
                age: parseInt(e.target.value) || 0,
              }))
            }
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelEdit}>Cancel</Button>
          <Button onClick={() => handleRowSave(editingRow)}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
