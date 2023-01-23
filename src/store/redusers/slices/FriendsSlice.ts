import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFriendRequest } from "../../../models/entities/friends/IFriendRequest";
import { IUser } from "../../../models/entities/user/IUser";
import { IAddFriendRequest } from "../../../models/requests/IAddFriendRequest";
import { addFriend as addFriendApi, getFriendRequests, deleteFriendRequest as deleteFriendRequestApi } from "../../../api/FriendsService";


interface FriendsState {
    friends?: IUser[],
    friendRequests?: IFriendRequest[];
    error: any;
}

const initialState: FriendsState = {
    friends: [],
    friendRequests: [],
    error: null,
}

export const addFriend = createAsyncThunk(
    'friends/addFriend',
    async (request: IAddFriendRequest) => {
      const response = await addFriendApi(request);
      return response;
    })

export const setFriendRequests = createAsyncThunk(
    'friends/requests/set',
    async () => {
      const response = await getFriendRequests();
      return response;
    })

export const deleteFriendRequest = createAsyncThunk(
    'friends/requests/delete',
    async (requestId: string) => {
       await deleteFriendRequestApi(requestId);
       return requestId;
    })    


export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(setFriendRequests.fulfilled, (state, action) => { state.friendRequests = action.payload});

        builder.addCase(addFriend.fulfilled, (state, action) => { state.friendRequests?.push(action.payload)});
        builder.addCase(addFriend.rejected, (state, action) => { state.error = action.error});

        builder.addCase(deleteFriendRequest.fulfilled, (state, action) => {
          state.friendRequests = state.friendRequests?.filter((request) => request.id !== action.payload)
      });
      },
})

export default friendsSlice.reducer;