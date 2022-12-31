import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getChats } from "../../../api/ChatService";
import { IChannel } from "../../../models/entities/channel/IChannel";
import { IChat, privateMessages } from "../../../models/entities/chats/IChat";
import { IFriendRequests } from "../../../models/entities/friends/IFriendRequest";
import { IUser } from "../../../models/entities/user/IUser";
import { login } from "./AuthorizationSlice";


interface FriendsState {
    friends?: IUser[],
    friendRequests?: IFriendRequests[];
}

const initialState: FriendsState = {
    friends: [],
    friendRequests: [],
}

export const setChats = createAsyncThunk(
    'chats/setFriends',
    async () => {
      const response = await getChats();
      return response;
    })

export const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

      },
})