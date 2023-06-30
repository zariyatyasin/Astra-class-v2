import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const AcademicForm = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="first-name"
            name="first-name"
            label="Exam Type"
            autoComplete="given-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="last-name"
            name="last-name"
            label="Name & location of institution(s) attended"
            autoComplete="family-name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="country-label">Main Field of Study</InputLabel>
            <Select
              id="country"
              name="country"
              autoComplete="country-name"
              labelId="country-label"
              fullWidth
              defaultValue={""}
            >
              <MenuItem value="Male">Science</MenuItem>
              <MenuItem value="Female">Arts</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="email-address"
            name="email-address"
            label="Date of Qualification"
            autoComplete="email"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="city"
            name="city"
            label="GPA"
            autoComplete="address-level2"
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default AcademicForm;
