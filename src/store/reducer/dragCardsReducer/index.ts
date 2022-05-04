import { combineReducers } from "redux";
import loadReducer from "./loadReducer";
import userReducer from "./userReducer";
import druggingUserReducer from "./draggingUserReducer";
import { flipThroughReducer } from "./flipThroughReducer";

const dragCardsReducer = combineReducers({
  loadReducer,
  userReducer,
  druggingUserReducer,
  flipThroughReducer,
});

export type DragCardsReducer = ReturnType<
  typeof dragCardsReducer
>;

export default dragCardsReducer;
