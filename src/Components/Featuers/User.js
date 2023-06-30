import { createSlice } from "@reduxjs/toolkit";
// import { UserData } from "../../PortfolioData";

export const userSlice = createSlice({
  name: "users",
  initialState: {value: []},

  reducers: {
    addUser: (state, action) => {

      state.value.push (action.payload)
    },

  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer
