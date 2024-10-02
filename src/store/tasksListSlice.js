import {createSlice, current} from "@reduxjs/toolkit";


const tasksListSlice = createSlice({
    name: "tasksList",
    initialState: [],
    reducers: {
        replaceAllTasks: (state, action) => {
            return [...action.payload]
        },
        removeTask: (state, action) => {
            return [...state.filter(el=>el.id!==action.payload.id)]
        },
        updateTask: (state, action) => {
            console.log("Current state: ", current(state));

            let index = state.findIndex(el => el.id === action.payload.id);

            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    title: action.payload.title,
                    id: action.payload.newId || state[index].id,
                    updated: action.payload.updated,
                    completed: action.payload.completed
                };
                console.log(`Task title updated to ${action.payload.title}, id updated to ${action.payload.newId || state[index].id}`);
            }
        },
        addTask: (state, action) => {
            let newTasksState = [...state, action.payload]
            console.log(current(state), newTasksState)
            return newTasksState
        }
    },

});

export const { replaceAllTasks, removeTask, updateTask, addTask} = tasksListSlice.actions;
export default tasksListSlice.reducer;