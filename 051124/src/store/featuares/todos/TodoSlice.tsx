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
        text: "gbdcnbdgf",
        completed: false
    }, 
    {
        id: 1,
        text: "dfbdfbdb",
        completed: false
    },
    {
        id: 2,
        text: "dfbdbfdbd",
        completed: false,  
    } ]
}


const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        toggleCompletion: (state, action: PayloadAction<number>) => {
            const selectedTask = state.tasks.find(task => task.id === action.payload)
            if (selectedTask) {
                selectedTask?.completed ? selectedTask.completed = false : selectedTask.completed = true
            }           
        }
    }

})

export const { toggleCompletion } = todoSlice.actions
export default todoSlice.reducer 