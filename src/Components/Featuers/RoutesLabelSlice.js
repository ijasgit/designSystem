import { createSlice } from "@reduxjs/toolkit";

export const RouteLabelSlice = createSlice({
  name: "stratagic outcome",
  initialState: { value: [{name:"PPG"}] },

  reducers: {
    addLabel: (state, action) => {
      state.value = [];
      state.value.push(action.payload);
    },

  },
});

export const { addLabel} = RouteLabelSlice.actions;
export default RouteLabelSlice.reducer;
