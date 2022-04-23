import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import loadReducer from "./loadReducer";
import userReducer from "./userReducer";
import druggingUserReducer from "./draggingUserReducer";
import { flipThroughReducer } from "./flipThroughReducer";
import { rootWatcher } from "../saga";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loadReducer,
  userReducer,
  druggingUserReducer,
  flipThroughReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootWatcher);

export default store;
