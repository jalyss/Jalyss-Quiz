import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";

export const fetchWheelProp = createAsyncThunk("fetchprop", async () => {
  const response = await axios.get(`http://${url}/wheel-propositions/isActive`);
  return response.data;
});
export const fetchAllWheelProp = createAsyncThunk("fetchAllprop", async () => {
  const response = await axios.get(`http://${url}/wheel-propositions`);
  return response.data;
});

export const updateWheelProp = createAsyncThunk(
  "updateWheelProp",
  async (args, { dispatch }) => {
    try {
      const { body, id } = args;
      const response = await axios.patch(
        `http://${url}/wheel-propositions/${id}`,
        body
      );
      console.log(response.data);
      dispatch(fetchAllWheelProp());
    } catch (error) {
      console.log(error);
    }
  }
);

export const addWheelProp = createAsyncThunk(
  "addWheelProp",
  async (args, { dispatch }) => {
    try {
      const response = await axios.post(
        `http://${url}/wheel-propositions`,
        args
      );
      console.log(response.data);
      dispatch(fetchAllWheelProp());
    } catch (error) {
      console.log(error);
    }
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
  }
});
export default WheelSlice.reducer;
