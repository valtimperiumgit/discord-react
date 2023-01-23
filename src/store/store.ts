import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthorizationReducer from '../store/redusers/slices/AuthorizationSlice'
import ChatsReducer from '../store/redusers/slices/ChatsSlice'
import UserReducer from '../store/redusers/slices/UserSlice'
import FriendsReducer from '../store/redusers/slices/FriendsSlice'

const rootReduser = combineReducers({
    AuthorizationReducer,
    ChatsReducer,
    UserReducer,
    FriendsReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];