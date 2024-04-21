import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./constant";


export const getMe = createAsyncThunk("auth/me", async (token) => {
  let configs = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await axios.get( `http://${url}/auth/me`, {
    ...configs,
  });

  return response.data;
});
// ${config.API_ENDPOINT}
export const login = createAsyncThunk(
  "auth/loginAdmin",
  async (body, { dispatch }) => {
   try {const response = await axios.post(
      `http://${url}/auth/login`,
      body
    );
    let aux = JSON.stringify(response.data);
    localStorage.setItem("token", aux);

    dispatch(getMe(response.data)).then((res)=>console.log(res.data,"this is the res from store"))
   
    return response.data;}
    catch(error) {
      console.log(error)
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/forgot-password",
  async (body, { dispatch }) => {
    const response = await axios.post(
      `http://${url}forgot-password`,
      body
    );
    return response.data;
  }
);

export const verificationCode = createAsyncThunk(
  "auth/verification-code",
  async (body) => {
    const response = await axios.post(
      `http://${url}verification-code`,
      body
    );
    let aux = JSON.stringify(response.data);
    localStorage.setItem("tokenCode", aux);
    return response.data;
  }
);

export const changePassword = createAsyncThunk(
  "auth/change-password",
  async (body) => {
    let token = JSON.parse(localStorage.getItem("tokenCode")).Authorization;
    let configs = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.post(
      `http://${url}change-password`,
      body,
      configs
    );
    return response.data;
  }
);

 const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    me: null,
    error: null,
    deleteError: null,
    saveError: null,
    registerError: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
export default AuthSlice.reducer;