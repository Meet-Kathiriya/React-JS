import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name : "counterslice",
    initialState : {count : 0},
    reducers : {
        increment : (state,action)=>{
            state.count +=1
        },
        decrement : (state,action) =>{
            state.count -=1
        }
    }

})


export const {increment,decrement} = counterSlice.actions
export default counterSlice.reducer