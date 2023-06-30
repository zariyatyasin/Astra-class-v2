import React from "react";
import { Grid, TextField } from "@mui/material";

const FamilyInfoForm = () => {
  return (
    <div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="father-name"
              name="father-name"
              label="Father's Full Name"
              autoComplete="given-name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="father-occupation"
              name="father-occupation"
              label="Occupation"
              autoComplete="family-name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="personal-phone"
              name="personal-phone"
              label="Personal Phone"
              autoComplete="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mother-name"
              name="mother-name"
              label="Mother's Full Name"
              autoComplete="address-level2"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="mother-occupation"
              name="mother-occupation"
              label="Occupation"
              autoComplete="address-level1"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="personal-phone"
              name="personal-phone"
              label="Personal Phone"
              autoComplete="postal-code"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default FamilyInfoForm;
