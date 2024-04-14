import { configureStore } from '@reduxjs/toolkit'
import participantSlice from './participantSlice'
import levelSlice from "./levels"
import wheelProp from './wheelProp'

export const store = configureStore({
  reducer: {
    participant:participantSlice,
    level : levelSlice,
    wheelProp : wheelProp
  },
})