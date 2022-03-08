import { createAction } from "@reduxjs/toolkit";

export default createAction("addToDo", todo => ({
  payload: {
    todo
  }
}));
