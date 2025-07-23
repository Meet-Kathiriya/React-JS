import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/CounterSlice";
import TodoRedux from "../TodoRedux";


export const store = configureStore({
    reducer: {
        counterKey: counterSlice,
        TodoKey : TodoRedux

    }
})