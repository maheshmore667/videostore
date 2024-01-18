import { createSlice } from "@reduxjs/toolkit"

const liveChatSlice = createSlice({
    name: "liveChatSlice",
    initialState: [],
    reducers : {
        addLiveComment : (state, action) =>{
            var chat = []
            chat?.push(action?.payload)
            if(state?.length > 20) {
                let stateDummy = [...state]?.splice(0,2)
                return [...stateDummy, chat]
            } else {
                return  [...state, ...chat]
            }
           
        } 
    }

})

export const {addLiveComment} = liveChatSlice?.actions;
export default liveChatSlice?.reducer;