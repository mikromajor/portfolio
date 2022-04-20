import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger"; // - dev_tools
import { rootWatcher } from "./saga";
import userReducer from "./reducers/userReducer";
import loadReducer from "./reducers/loadReducer";

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  userReducer,
  loadReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootWatcher);

export default store;
