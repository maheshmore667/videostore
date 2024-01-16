import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../Store/Slices/navSlice"
import searchSliceReducer from "../Store/Slices/searchSlice";

const appStore = configureStore({
    reducer : {
        navSlice : navSliceReducer,
        searchSlice : searchSliceReducer
    }
});

export default appStore;