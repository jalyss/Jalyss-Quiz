import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";


export const createPartcipant = createAsyncThunk(
  "createParticipants",
  async (body) => {
    const response = await axios.post(
      `http://${url}/participants`,
      body
    );
    return response.data;
  }
);

 const participantSlice = createSlice({
  name: "participant",
  initialState: {
    participant: null,
    participants: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createPartcipant.fulfilled, (state, action) => {
      state.participants = action.payload;
    });
  },
});
export default participantSlice.reducer;