import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";
import { create } from "@mui/material/styles/createTransitions";


export const createPartcipant = createAsyncThunk(
  "createParticipants",
  async (body) => {
    const response = await axios.post(
      `http://${url}/participants`,
      body
    );
    localStorage.setItem("participantId",JSON.stringify(response.data.id))
    return response.data;
  }
);

export const participantReward = createAsyncThunk("/participantReward", async (body) => {
  const {id,reward} = body
const response = await axios.put(`http://${url}/participants/${id}`,{
  "wheelPropositionId": reward
})
return response.data
})

 const participantSlice = createSlice({
  name: "participant",
  initialState: {
    participant: null,
    participants: [],
    participantReward : {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createPartcipant.fulfilled, (state, action) => {
      state.participants = action.payload;
    });
    builder.addCase(participantReward.fulfilled, (state, action) => {
      state.participantReward = action.payload;
    });
  },
});
export default participantSlice.reducer;