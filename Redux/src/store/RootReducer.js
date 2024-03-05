import { createSlice } from "@reduxjs/toolkit";

const initState = {
    user: {
        name: "John Doe",
        email: "vdfgfdgf@gmail.com"
    },
    isAuth: false
}

const rootReducer = createSlice({
    name: "root",
    initialState: initState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuth = false;
        }
    }
})

export const {login, logout} = rootReducer.actions;
export default rootReducer;


