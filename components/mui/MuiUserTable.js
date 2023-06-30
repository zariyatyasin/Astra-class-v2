import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
const MuiUserTable = ({ users }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState(users);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);

    const filteredData = users.filter((user) => {
      const fullName = user.name;
      return fullName.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredRows(filteredData);
  };

  const columns = [
    { field: "username", headerName: "Username", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "role", headerName: "Role", width: 150 },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <VisibilityOutlinedIcon sx={{ fontSize: "18px" }} />
          <CreateOutlinedIcon
            sx={{ fontSize: "18px", ml: 1 }}
            style={{ cursor: "pointer" }}
          />
          <DeleteOutlineOutlinedIcon
            sx={{ fontSize: "18px", ml: 1 }}
            style={{ cursor: "pointer" }}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }} className="bg-white">
      <input
        type="text"
        value={searchText}
        className="w-full border text-sm border-gray-300 rounded-md text-gray-900 block pl-3 pr-10 py-2 sm:text-sm"
        onChange={handleSearch}
        placeholder="Search..."
      />

      <DataGrid
        rows={filteredRows.map((user) => ({
          id: user._id,
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        }))}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default MuiUserTable;
