import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "navSlice",
    initialState : true,
    reducers : {
        toggleSidebar : (state =>{
            return !state;
        }),
        closeSideBar : (state =>{
            return state = false;
        })
    }
})
export const { toggleSidebar, closeSideBar} = navSlice?.actions;
export default navSlice?.reducer