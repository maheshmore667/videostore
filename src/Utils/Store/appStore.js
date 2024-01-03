import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../Store/Slices/navSlice"

const appStore = configureStore({
    reducer : {
        navSlice : navSliceReducer
    }
});

export default appStore;