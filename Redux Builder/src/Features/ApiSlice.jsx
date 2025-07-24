import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchApi = createAsyncThunk("fetchApi", async () => {
    let response = await axios.get("http://localhost:1005/users")
    return response.data
})

export const AddData = createAsyncThunk("adddata", async (newData) => {
    const response = await axios.post("http://localhost:1005/users", newData)
    return response.data
})

export const deleteData = createAsyncThunk("deletedata", async (id) => {
    await axios.delete(`http://localhost:1005/users/${id}`)
    return id;
})

export const updateData = createAsyncThunk("updatedata", async (user) => {
    const response = await axios.put(`http://localhost:1005/users/${user.id}`, user)
    return response.data
})

export const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: { data: [], loading: true },
    extraReducers: (builder) => {
        builder.addCase(FetchApi.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(FetchApi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(AddData.fulfilled, (state, action) => {
            state.data.push(action.payload)
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.data = state.data.filter((item) => item.id != action.payload)
        })
        builder.addCase(updateData.fulfilled, (state, action) => {
            state.data = state.data.map((item) => item.id == action.payload.id ? action.payload : item)
        })
    }
})

export default ApiSlice.reducer