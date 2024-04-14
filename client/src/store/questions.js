import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async () => {
    const response = await axios.post(
      "http://localhost:5000/levels",
    );
    return response.data;
  }
);

 const Slice = createSlice({
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