import { createSlice } from "@reduxjs/toolkit";

export const SoftwareSlice = createSlice({
  name: "software_as_service",
  initialState: { value: [{ name: "" }], ppgDataTable: [] },

  reducers: {
    addSoftware: (state, action) => {
      state.value = [];
      state.value.push(action.payload);
    },
    addPPG: (state, action) => {
      state.ppgDataTable.push(action.payload);
    },
  },
});

export const { addSoftware, addPPG } = SoftwareSlice.actions;
export default SoftwareSlice.reducer;
