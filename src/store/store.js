import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../store/slices/postSlices'
import usersReducer from '../store/slices/usersSlice'

export const store = configureStore({
    reducer:{
        posts: postReducer,
        users: usersReducer
    }
})