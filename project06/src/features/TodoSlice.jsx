import { createSlice } from "@reduxjs/toolkit";


export const TodoSlice = createSlice({
    name: "TodoSlice",
    initialState: { data: [] },
    reducers: {
        addData: (state, action) => {
            state.data.push(action.payload)
        },
        deleteData: (state, action) => {
        },
        updateData: (state, action) => {
        }
    }
})

export const { addData, deleteData, updateData } = TodoSlice.actions
export default TodoSlice.reducer