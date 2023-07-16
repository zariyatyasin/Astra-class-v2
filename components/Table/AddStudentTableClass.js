import { useState } from "react";
import { useRouter } from "next/router";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { Button, TextField, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AddStudentTableClass = ({ students, classes }) => {
  const [filterValue, setFilterValue] = useState("");

  if (!students) {
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
      width: 150,
      renderCell: (params) => {
        const router = useRouter();
        const { id } = router.query;
        const studentId = params.row.studentId;
        const classId = id;

        const [buttonText, setButtonText] = useState(params.value);
        const [loading, setLoading] = useState(false);
        const handleButtonClick = async () => {
          try {
            setLoading(true);

            if (buttonText === "Add") {
              await axios.put(
                "http://localhost:3000/api/subadmin/createclass",
                {
                  studentId,
                  classId,
                }
              );
              setButtonText("Remove");
            } else if (buttonText === "Remove") {
              await axios.put(
                "http://localhost:3000/api/subadmin/createclass",
                {
                  studentId,
                  classId,
                }
              );
              setButtonText("Add");
            }

            setLoading(false);
          } catch (error) {
            console.error("Error occurred:", error);
            setLoading(false);
          }
        };

        return (
          <Button
            variant="contained"
            color={buttonText === "Add" ? "primary" : "secondary"}
            onClick={handleButtonClick}
            disabled={loading}
            startIcon={loading && <CircularProgress size={20} />}
          >
            {loading ? "Loading..." : buttonText}
          </Button>
        );
      },
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const rows = students.map((student, index) => {
    const { _id } = student;
    const studentClass = classes.find((classItem) =>
      classItem.students.some((s) => s.studentId === _id)
    );

    const joinedClasses = studentClass ? "Remove" : "Add";

    return {
      id: index + 1,
      studentId: _id,
      name: student.name,
      groupName: student.group.groupName,
      batchName: student.batch.batchName,
      lastName: student.username,
      joinedClasses,
    };
  });

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
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
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
    </div>
  );
};

export default AddStudentTableClass;
