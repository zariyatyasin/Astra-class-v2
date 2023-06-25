import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    mode: "dark",
    OpenSidebar: false,
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    SidebarOpen: (state) => {
      state.OpenSidebar = state.OpenSidebar === true ? false : true;
    },
  },
});

export const { setMode, SidebarOpen } = globalSlice.actions;

export default globalSlice.reducer;
