import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchSlice",
    initialState : {

    },
    reducers : {
        addSearchCache : (state, action) =>{
            return {...state, ...action?.payload}
        }
    }
})
export const  {addSearchCache} = searchSlice?.actions;
export default searchSlice?.reducer;