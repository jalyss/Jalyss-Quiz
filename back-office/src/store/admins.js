import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";

export const fetchAdmins = createAsyncThunk(
  "fetchAdmins",
  async () => {
    const response = await axios.get(`http://${url}/admins`);
    return response.data;
  }
);

export const createAdmin = createAsyncThunk(
  "/createAdmin",
  async (body,{dispatch}) => {
    const response = await axios.post(
      `http://${url}/admins`,
      body
    );
    dispatch(fetchAdmins())
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "levels",
  initialState: {

    admins: [],
   
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAdmins.fulfilled, (state, action) => {
      state.admins = action.payload;
    });
    builder.addCase(createAdmin.fulfilled, (state, action) => {
      state.admins = action.payload;
    });
  }
});
export default adminSlice.reducer;
