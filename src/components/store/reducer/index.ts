import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import dragCardsReducer from "./dragCardsReducer";
import { rootWatcher } from "../saga";

import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  dragCardsReducer,
  //gitHubSearcherReducer.....
});

export type StateType = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootWatcher);

export default store;
