import { combineReducers } from "redux";
import { mathReducer } from "./mathReducer";

const simpleCalcReducer = combineReducers({
  mathReducer,
});

export type SimpleCalcReducer = ReturnType<
  typeof simpleCalcReducer
>;

export default simpleCalcReducer;
