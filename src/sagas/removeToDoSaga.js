import { put } from "redux-saga/effects";
import { removeToDo } from "../slices/toDo";

export default function* removeToDoSaga({ payload: { id } }) {
  yield put(removeToDo(id));
}
