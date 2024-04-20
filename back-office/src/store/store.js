import { configureStore } from '@reduxjs/toolkit'

import auth from './auth';
import userSlice from './UserInfo'



export const store = configureStore({
    reducer: {
        userSlice  , auth
    }
})