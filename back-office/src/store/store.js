import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import questions from "./questions";
import participantSlice from "./participantSlice";
import admins from "./admins";
import wheelProp from "./wheelProp";



export const store = configureStore({
  reducer: {

   auth,
  questions,
  participantSlice,
  admins,
  wheelProp
    
  
  }
});
