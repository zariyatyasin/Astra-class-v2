import React from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const schema = yup.object().shape({
  batchName: yup
    .string()
    .required("Name is required")
    .matches(/^\S*$/, "Space is not allowed"),
});
const CreateBatchForm = ({ initialData, setData, setOpen }) => {
  console.log(initialData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const startDateValue = initialData?.startDate
    ? formatDate(initialData.startDate)
    : "";
  const endDateValue = initialData?.endDate
    ? formatDate(initialData.endDate)
    : "";
  const onSubmit = async (formData) => {
    try {
      const formatDateString = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
      };

      const formattedStartDate = formatDateString(formData.startDate);
      const formattedEndDate = formatDateString(formData.endDate);

      const response = initialData
        ? await axios.put("http://localhost:3000/api/subadmin/createbatch", {
            id: initialData._id,
            batchName: formData.batchName,
            batchCode: formData.batchCode,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          })
        : await axios.post("http://localhost:3000/api/subadmin/createbatch", {
            batchName: formData.batchName,
            batchCode: formData.batchCode,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
          });

      const responseData = response.data;
      console.log(responseData);
      setData(responseData.batch);
      setOpen(false);

      toast.success(responseData.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Name"
            variant="outlined"
            {...register("batchName")}
            defaultValue={initialData?.batchName || ""}
            error={!!errors.batchName}
            helperText={errors.batchName?.message}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            {...register("startDate")}
            defaultValue={startDateValue}
            // error={!!errors.startDate}
            // helperText={errors.startDate?.message}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            {...register("endDate")}
            defaultValue={endDateValue}
            // error={!!errors.endDate}
            // helperText={errors.endDate?.message}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Grid>
      <div className="mt-4">
        <Button variant="contained" type="submit" fullWidth>
          {initialData ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default CreateBatchForm;
