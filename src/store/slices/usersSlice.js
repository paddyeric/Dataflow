import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Dude Zil'},
    {id: '1', name: 'Eric Paddy'},
    {id: '2', name: 'Jade Wilton'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer