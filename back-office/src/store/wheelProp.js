import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";


export const fetchWheelProp = createAsyncThunk(
  "fetchprop",
  async () => {
    const response = await axios.get(
      `http://${url}/wheel-propositions/isActive`,
    );
    return response.data;
  }
);
export const fetchAllWheelProp = createAsyncThunk(
  "fetchAllprop",
  async () => {
    const response = await axios.get(
      `http://${url}/wheel-propositions`,
    );
    return response.data;
  }
);

 const WheelSlice = createSlice({
  name: "Wheel",
  initialState: {
   wheelprop: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchWheelProp.fulfilled, (state, action) => {
      state.wheelprop = action.payload;
    });
    builder.addCase(fetchAllWheelProp.fulfilled, (state, action) => {
      state.wheelprop = action.payload;
    });
  },
});
export default WheelSlice.reducer;