import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getChats } from "../../../api/ChatService";
import { IChannel } from "../../../models/entities/channel/IChannel";
import { IChat, privateMessages } from "../../../models/entities/chats/IChat";
import { login } from "./AuthorizationSlice";


interface ChatsState {
    chats: IChat[],
    activeChat?: IChat;
}

const initialState: ChatsState = {
    chats: [],
    activeChat: privateMessages,
}

export const setChats = createAsyncThunk(
    'chats/setChats',
    async () => {
      const response = await getChats();
      return response;
    })

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(setChats.fulfilled, (state, action) => {
            state.chats = action.payload;
          })
      },
})


export default chatsSlice.reducer;