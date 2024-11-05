import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
    tasks: {
    id: number;
    text: string;
    completed: boolean;
}[];
}

const initialState: TodoState = {
    tasks:[ {
        id: 0,
        text: "",
        completed: false
    }, 
    {
        id: 1,
        text: "",
        completed: false
    },
    {
        id: 2,
        text: "",
        completed: false,  
    } ]
}


export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        toggleCompletion: (state, action: PayloadAction<number>): boolean => {
            const selectedTask = state.tasks.find(task => task.id === action.payload)
        }
    }

})