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

export const updateActiveQuestion = createAsyncThunk(
  "updateActiveQuestion",async(args,{dispatch}) => {
const {body,id} = args
try {
  const response = await axios.patch(`http://${url}/questions/${id}`,body)
  dispatch(fetchQuestions())
  return response.data
} catch (error) {
  console.log(error)
}
  }
)

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