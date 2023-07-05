import { createSlice } from "@reduxjs/toolkit";

export const StratagicSlice = createSlice({
  name: "stratagic outcome",
  initialState: { value: [{ name: "" }], ppgDataTable: [] },

  reducers: {
    addStratagicName: (state, action) => {
      state.value = [];
      state.value.push(action.payload);
    },
    addStratagic: (state, action) => {
      state.ppgDataTable.push(action.payload);
    },
  },
});

export const { addStratagic, addStratagicName } = StratagicSlice.actions;
export default StratagicSlice.reducer;
