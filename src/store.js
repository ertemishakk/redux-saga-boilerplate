import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSagas from "./sagas/rootSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(rootSagas);

export default store;
