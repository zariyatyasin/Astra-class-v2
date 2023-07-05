import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";

const PersonalForm = ({
  handleChange,
  formData,
  errors,
  batch,
  setGetName,
}) => {
  console.log(batch);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="first-name"
            name="name"
            label="First name"
            autoComplete="given-name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="last-name"
            name="lastName"
            label="Last name"
            autoComplete="family-name"
            variant="outlined"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email-address"
            name="email"
            label="email"
            autoComplete="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              autoComplete="sex"
              label="Gender"
              defaultValue=""
              value={formData.gender}
              onChange={handleChange}
              error={!!errors.gender}
              helperText={errors.gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="email"
            name="roll"
            label="Roll"
            autoComplete="roll"
            variant="outlined"
            fullWidth
            value={formData.roll}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="cell-phone"
            name="cellPhone"
            label="Cell Phone"
            autoComplete="tel"
            variant="outlined"
            fullWidth
            value={formData.cellphone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="birth-date"
            name="birth-date"
            label="Birth Date"
            autoComplete="bday"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="city"
            name="city"
            label="City"
            autoComplete="address-level2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="street"
            name="street"
            label="Street"
            autoComplete="address-level1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <TextField
            id="street"
            name="street"
            label="Street"
            autoComplete="address-level1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="batch-label">Batch</InputLabel>
            <Select
              labelId="batch-label"
              id="batch"
              name="batch"
              autoComplete="batch"
              label="Batch"
              value={formData.batch}
              onChange={handleChange}
            >
              {batch.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {setGetName(item.batchName)}
                  {item.batchName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalForm;
