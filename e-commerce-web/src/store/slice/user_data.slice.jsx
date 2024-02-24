import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn:false,
    loading:true
}

const user_data_slice = createSlice({
    name:"user_data",
    initialState:initialState,
    reducers:{
        set_Changes:(state,actions)=>{
            state.isLoggedIn = actions.payload,
            state.loading = false
        }
    }
    
})

export default user_data_slice.reducer
export const {set_Changes} = user_data_slice.actions