import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login as loginApi } from "../../../api/AuthorizationService";
import { ILoginRequest } from "../../../models/requests/ILoginRequest";

interface AuthorizationState {
    isAuthorized: boolean;
    error: any;
}

const initialState: AuthorizationState = {
    isAuthorized: false,
    error: null,

}

export const login = createAsyncThunk(
    'authorization/login',
    async (request: ILoginRequest) => {
      const response = await loginApi(request);
      console.log(response);
      return response;
    })

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAuthorized(state, action : PayloadAction<boolean>){
          state.isAuthorized = action.payload;
          console.log(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
          localStorage.setItem("Token", action.payload);
          state.isAuthorized = true;
          state.error = null;
        })

        builder.addCase(login.rejected, (state, action) => {
          state.error = action.error;
        })
      },
})


export default authorizationSlice.reducer;
