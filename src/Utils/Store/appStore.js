import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from "../Store/Slices/navSlice"
import searchSliceReducer from "../Store/Slices/searchSlice";
import liveChatSliceReducer from "../Store/Slices/liveChatSlice";

const appStore = configureStore({
    reducer : {
        navSlice : navSliceReducer,
        searchSlice : searchSliceReducer,
        liveChatSlice : liveChatSliceReducer
    }
});

export default appStore;