import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";



export const fetchQuestions = createAsyncThunk(
  "fetchQuestions",
  async () => {
    const response = await axios.get(
      `http://${url}/questions`,
    );
    return response.data;
  }
);

 const questionSlice = createSlice({
  name: "question",
  initialState: {
    questions: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});
export default questionSlice.reducer;