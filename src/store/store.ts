import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AuthorizationReducer from '../store/redusers/slices/AuthorizationSlice'

const rootReduser = combineReducers({
    AuthorizationReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser
    })
}

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];