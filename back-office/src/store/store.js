import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import questions from "./questions";
import participantSlice from "./participantSlice";



export const store = configureStore({
  reducer: {

   auth,
  questions,
  participantSlice
    
  
  }
});
