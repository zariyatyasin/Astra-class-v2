import AdminLayout from "@/components/SubAdmin/layout/AdminLayout";
import CreateBatchForm from "@/components/forms/CreateBatchForm";
import React, { useState } from "react";
import { Button, Modal } from "@mui/material";
import Batch from "@/model/Batch";

import BatchTable from "@/components/Table/BatchTable";
import ReuableTable from "@/components/Table/ReuableTable";
import { connectDb } from "@/utils/db";

const Index = ({ batch }) => {
  const columnConfig = [
    { field: "batchName", headerName: "Name", width: 200 },
    { field: "batchCode", headerName: "Code", width: 200 },

    { field: "startDate", headerName: "Start", width: 200 },
    { field: "endDate", headerName: "End", width: 200 },

    { field: "actions", headerName: "Actions", width: 300 },
  ];
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(batch);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModalClose = () => {
    handleClose();
  };

  console.log(data);

  return (
    <div>
      <AdminLayout>
        <Button variant="contained" onClick={handleOpen}>
          Create Batch
        </Button>
        <Modal open={open} onClose={handleModalClose}>
          <div
            className="flex items-center justify-center h-full"
            onClick={handleClose}
          >
            <div
              className="bg-white rounded-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <CreateBatchForm setData={setData} setOpen={setOpen} />
            </div>
          </div>
        </Modal>

        <ReuableTable
          data={data}
          setData={setData}
          columnConfig={columnConfig}
        />
      </AdminLayout>
    </div>
  );
};

export default Index;
export async function getServerSideProps(context) {
  connectDb();
  const batch = await Batch.find({}).sort({ updatedAt: -1 }).lean();

  return {
    props: {
      batch: JSON.parse(JSON.stringify(batch)),
    },
  };
}
