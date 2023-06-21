import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../PortfolioData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UserData },

  reducers: {
    addUser: (state, action) => {},

  },
});

export default userSlice.reducer
