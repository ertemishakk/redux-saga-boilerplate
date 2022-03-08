import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addNewToDo(state, action) {
      const { payload } = action;

      return payload == null ? state : [...state, payload];
    },
    removeToDo(state, action) {
      const { payload } = action;
      return payload === null
        ? state
        : state.filter((todo, index) => index !== payload);
    }
  }
});

export const { addNewToDo, removeToDo } = slice.actions;

export default slice.reducer;
