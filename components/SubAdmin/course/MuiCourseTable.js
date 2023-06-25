import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import UpdateCourse from "./UpdateCourse";

export default function EnrollmentTable({ data, faculties, setData }) {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);
  console.log(this);
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
              onClick={() => {
                console.log("Delete clicked for ID:", row._id);
              }}
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
            courseId={selectedRow._id}
            data={data}
            setData={setData}
          />
          {/* <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <h2>Update Row</h2>
            <p>Selected Row ID: {selectedRow._id}</p> */}
        </div>
      )}
    </div>
  );
}
