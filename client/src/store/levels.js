import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";

export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async level => {
    const response = await axios.get(`http://${url}/levels/${level}`);
    return response.data;
  }
);

export const participantQuestion = createAsyncThunk(
  "/participantQuestion",
  async body => {
    const response = await axios.post(
      `http://${url}/participant-questions`,
      body
    );
    return response.data;
  }
);

const levelSlice = createSlice({
  name: "levels",
  initialState: {
    participant: null,
    levels: [],
    participantQuestion: {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.levels = action.payload;
    });
    builder.addCase(participantQuestion.fulfilled, (state, action) => {
      state.participantQuestion = action.payload;
    });
  }
});
export default levelSlice.reducer;
