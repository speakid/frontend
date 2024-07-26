import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import studentReducer from "./Student"


const rootReducer = combineReducers({
    user: userReducer,
    student: studentReducer
})

export const store = configureStore({
    reducer: rootReducer
})