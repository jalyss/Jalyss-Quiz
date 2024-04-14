import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWheelProp = createAsyncThunk(
  "fetchprop",
  async () => {
    const response = await axios.get(
      "http://localhost:5000/wheel-propositions",
    );
    return response.data;
  }
);

 const WheelSlice = createSlice({
  name: "Wheel",
  initialState: {
   wheelprop: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchWheelProp.fulfilled, (state, action) => {
      state.wheelprop = action.payload;
    });
  },
});
export default WheelSlice.reducer;