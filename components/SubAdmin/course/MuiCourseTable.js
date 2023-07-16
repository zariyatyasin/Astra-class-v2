import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import UpdateCourse from "./UpdateCourse";
import { useState } from "react";
import axios from "axios";

export default function EnrollmentTable({ data, faculties, setData }) {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState(null);

  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`/api/subadmin/course`, {
        courseId: "64a2cddbec31ff1658ffd0ac",
      });

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 200 },
    { field: "credits", headerName: "Credits", width: 200 },
    { field: "faculty", headerName: "Faculty", width: 200 },
    {
      field: "actions",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const { row } = params;
        return (
          <>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
              onClick={() => {
                setSelectedRow(row);
                setOpen(true);
              }}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  const rows = data?.map((data, index) => ({
    ...data,
    id: index + 1,
  }));

  return (
    <div className="h-600 w-full bg-white">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

      {open && (
        <div className="modal">
          <UpdateCourse
            setOpen={setOpen}
            faculties={faculties}
            courseId={selectedRow?._id}
            selectedRow={selectedRow}
            setData={setData}
          />
          <span className="close" onClick={() => setOpen(false)}>
            &times;
          </span>
        </div>
      )}
    </div>
  );
}
