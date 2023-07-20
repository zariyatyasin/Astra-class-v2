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
