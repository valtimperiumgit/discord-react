import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthorizationReducer from '../store/redusers/slices/AuthorizationSlice'
import ChatsReducer from '../store/redusers/slices/ChatsSlice'
import UserReducer from '../store/redusers/slices/UserSlice'

const rootReduser = combineReducers({
    AuthorizationReducer,
    ChatsReducer,
    UserReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];