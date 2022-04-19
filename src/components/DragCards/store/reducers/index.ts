import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import loadReducer from "./loadReducer";
import userReducer from "./userReducer";
import druggingUserReducer from "./draggingUserReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  loadReducer,
  userReducer,
  druggingUserReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootWatcher);
