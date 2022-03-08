import { put } from "redux-saga/effects";
import { addNewToDo } from "../slices/toDo";

export default function* addToDoSaga({ payload: { todo } }) {
  yield put(addNewToDo(todo));
}
