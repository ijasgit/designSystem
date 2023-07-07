import { createSlice } from "@reduxjs/toolkit";

export const FinanceSlice = createSlice({
  name: "finance outcome",
  initialState: { value: [{ name: "" }], ppgDataTable: [] },

  reducers: {
    addFinanceName: (state, action) => {
      state.value = [];
      state.value.push(action.payload);
    },
    addFinance: (state, action) => {
      state.ppgDataTable.push(action.payload);
    },
  },
});

export const { addFinance, addFinanceName } = FinanceSlice.actions;
export default FinanceSlice.reducer;
