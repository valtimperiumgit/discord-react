import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser, getCurrentUsers } from "../../../api/UserService";
import { IUser } from "../../../models/entities/user/IUser";

interface UserState {
    isAuthorized: boolean;
    error: any;
    user?: IUser;
    currentUsers?: IUser[];
}

const initialState: UserState = {
    isAuthorized: false,
    error: null,
}


export const setUser = createAsyncThunk(
    'user/setUser',
    async () => {
      const response = await getUser();
      return response;
    })

export const setCurrentUsers = createAsyncThunk(
    'user/setCurrentUsers',
    async () => {
      const response = await getCurrentUsers();
      return response;
    }) 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addFriendToUser(state, action : PayloadAction<string>){
            state.user?.friends.push(action.payload);
          },
    },
    extraReducers: (builder) => {
        builder.addCase(setUser.fulfilled, (state, action) => { state.user = action.payload});
        builder.addCase(setCurrentUsers.fulfilled, (state, action : PayloadAction<IUser[]>) => {
            state.currentUsers = action.payload;
          });
    },
})


export default userSlice.reducer;