import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  code: yup.string().required("Code is required"),
  batch: yup.string().required("Batch is required"),
  faculty: yup.string().required("Faculty is required"),
  startDate: yup.date().nullable().required("Start Date is required"),
  endDate: yup.date().nullable().required("End Date is required"),
});

const ClassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="space-y-4">
        <TextField
          label="Name"
          variant="outlined"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
          className="w-full"
        />
        <TextField
          label="Code"
          variant="outlined"
          {...register("code")}
          error={!!errors.code}
          helperText={errors.code?.message}
          className="w-full"
        />
        <TextField
          label="Batch"
          variant="outlined"
          {...register("batch")}
          error={!!errors.batch}
          helperText={errors.batch?.message}
          className="w-full"
        />
        <TextField
          label="Faculty"
          variant="outlined"
          {...register("faculty")}
          error={!!errors.faculty}
          helperText={errors.faculty?.message}
          className="w-full"
        />
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          {...register("startDate")}
          error={!!errors.startDate}
          helperText={errors.startDate?.message}
          InputLabelProps={{ shrink: true }}
          className="w-full"
        />
        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          {...register("endDate")}
          error={!!errors.endDate}
          helperText={errors.endDate?.message}
          InputLabelProps={{ shrink: true }}
          className="w-full"
        />
        <FormControl variant="outlined" className="w-full">
          <InputLabel id="credits-label">Credits</InputLabel>
          <Select
            labelId="credits-label"
            label="Credits"
            {...register("credits")}
            error={!!errors.credits}
            helperText={errors.credits?.message}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            {/* Add more options as needed */}
          </Select>
        </FormControl>
        {/* Add more fields from ClassSchema as needed */}
      </div>
      <Button variant="contained" type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
};

export default ClassForm;
