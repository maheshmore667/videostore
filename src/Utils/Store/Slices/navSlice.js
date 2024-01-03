import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "navSlice",
    initialState : false,
    reducers : {
        toggleSidebar : (state =>{
            return !state;
        })
    }
})
export const { toggleSidebar} = navSlice?.actions;
export default navSlice?.reducer