import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:"counter",
    initialState:{
        valueCount:0
    },
    reducers:{
        increment:(state,action)=>{
            state.valueCount+=action.payload
        },
        decrement:(state,action)=>{
            state.valueCount-=action.payload
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer