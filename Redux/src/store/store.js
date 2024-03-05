import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";

const store = configureStore({
    reducer: {
        // Here we will be adding reducers
        root : rootReducer.reducer
    }
})

export default store;

