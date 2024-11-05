// store.ts
import { configureStore } from "@reduxjs/toolkit";
import reducer from './featuares/todos/TodoSlice';

export const store = configureStore({

    reducer: {
        todos: reducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;