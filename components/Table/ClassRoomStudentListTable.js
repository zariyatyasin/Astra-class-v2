import { useState } from "react";
import { useRouter } from "next/router";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { Button, TextField, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ClassRoomStudentListTable = ({ students, setStudents }) => {
  const [filterValue, setFilterValue] = useState("");

  if (!students) {
    // Handle the case when students array is undefined
    return <div>Loading...</div>;
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "groupName", headerName: "Group Name", width: 150 },
    { field: "batchName", headerName: "Batch", width: 150 },
    {
      field: "joinedClasses",
      headerName: "Joined Classes",
      width: 230,
      renderCell: (params) => {
        const router = useRouter();
        const { id } = router.query;
        const studentId = params.row.studentId;
        const classId = id; // Specify the class ID to check

        const [buttonText, setButtonText] = useState(params.value);
        const [loading, setLoading] = useState(false); // Add loading state

        const handleButtonClick = async () => {
          try {
            setLoading(true);

            await axios.put("http://localhost:3000/api/subadmin/createclass", {
              studentId,
              classId,
            });

            // Remove the student from the students array
            setStudents((prevStudents) => {
              const updatedStudents = prevStudents.filter(
                (student) => student._id !== studentId
              );
              return updatedStudents;
            });

            setLoading(false);
          } catch (error) {
            console.error("Error occurred:", error);
            setLoading(false);
          }
        };
        const handleViewClick = () => {
          // Handle the view button click
          console.log("View student ID:", studentId);
        };

        return (
          <div>
            <Button
              variant="outlined"
              onClick={handleViewClick}
              startIcon={<VisibilityIcon />}
              style={{ marginRight: "1rem" }}
            >
              View
            </Button>
            <Button
              variant="outlined"
              color={buttonText === "Add" ? "primary" : "secondary"}
              onClick={handleButtonClick}
              disabled={loading} // Disable the button while loading
              startIcon={loading && <CircularProgress size={20} />} // Show loading indicator
            >
              {loading ? "Loading..." : buttonText}
            </Button>
          </div>
        );
      },
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const rows = students.map((student, index) => {
    const { _id } = student; // Assuming the student ID field is named '_id'

    return {
      id: index + 1,
      studentId: _id,
      name: student.name,
      groupName: student.group.groupName,
      batchName: student.batch.batchName,
      lastName: student.username,
      joinedClasses: "Remove", // Always set to "Remove" since it represents the action of removing the student
    };
  });
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-5">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <TextField
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Filter by name..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
          sx={{ marginRight: "1rem" }}
        />
      </div>
      <div style={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              backgroundColor: "#fff",
            },
            "& .MuiDataGrid-columnsContainer": {
              backgroundColor: "#f4f4f4",
            },
            "& .MuiDataGrid-iconSeparator": {
              display: "none",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ClassRoomStudentListTable;
