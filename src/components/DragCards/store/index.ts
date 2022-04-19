import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
// import { rootWatcher } from "./saga";

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  // countReducer,
  // userReducer,
  // loadReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

//sagaMiddleware.run(rootWatcher);
