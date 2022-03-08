import { createAction } from "@reduxjs/toolkit";

export default createAction("removeToDo", id => ({
  payload: {
    id
  }
}));
