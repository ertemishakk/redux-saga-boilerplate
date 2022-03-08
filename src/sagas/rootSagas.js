import { all, spawn, call, takeEvery } from "redux-saga/effects";
import addToDo from "../actions/addToDo";
import removeToDo from "../actions/removeToDo";
import addToDoSaga from "./addToDoSaga";
import removeToDoSaga from "./removeToDoSaga";

function* watcher() {
  yield all([takeEvery(addToDo, addToDoSaga)]);
  yield all([takeEvery(removeToDo, removeToDoSaga)]);
}

export default function*() {
  const sagas = [watcher];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
