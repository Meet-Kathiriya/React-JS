import { configureStore } from "@reduxjs/toolkit";
import  ApiSlice  from "../Features/ApiSlice";

export const store = configureStore({
    reducer: {
        apiKey : ApiSlice
    }
})