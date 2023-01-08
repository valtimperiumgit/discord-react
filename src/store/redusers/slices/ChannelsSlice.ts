import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChannel } from "../../../models/entities/channel/IChannel";
import { login } from "./AuthorizationSlice";


interface ChannelsState {
    activeCannel: IChannel;
}

const initialState: ChannelsState = {
    activeCannel: {Id: "", Name: ""},
}

export const channelsSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

      },
})


export default channelsSlice.reducer;