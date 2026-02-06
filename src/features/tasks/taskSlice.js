import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.unshift(action.payload); 
    },

    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
