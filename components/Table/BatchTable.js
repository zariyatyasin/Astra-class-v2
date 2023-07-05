import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useRouter } from "next/router";
import { IconButton } from "@mui/material";

export default function BatchTable({ data, setData }) {
  const router = useRouter();
  const handleUpdate = (id) => {
    // Logic for handling update button click
    console.log(`Update button clicked for ID: ${id}`);
  };

  const handleDelete = async (id) => {
    try {
      // Make axios delete request
      // await axios.delete(`/api/data/${id}`);

      // Update the table by removing the deleted row
      const updatedData = data.filter((item) => item._id !== id);
      setData(updatedData); // Assuming you have a state variable named `data` to store the table data

      console.log(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting item with ID ${id}`, error);
    }
  };

  const handleView = (id) => {
    // Logic for handling view button click

    router.push(`/subadmin/editclass/?id=${id}`);
  };
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "code", headerName: "Code", width: 200 },

    { field: "section", headerName: "Section", width: 120 },
    { field: "faculty", headerName: "Faculty", width: 200 },
    { field: "isActive", headerName: "Active", width: 120 },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <div className="flex item-center justify-center">
          <IconButton
            className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
            onClick={() => handleView(params.row._id)}
          >
            <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
          </IconButton>
          <IconButton
            className="mr-2 transform cursor-pointer hover:text-blue-500 hover:scale-110"
            onClick={() => handleUpdate(params.row._id)}
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
      ),
    },
  ];
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
    </div>
  );
}
