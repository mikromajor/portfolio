import { combineReducers } from "redux";
import { mathReducer } from "./mathReducer";
import { effectsReducer } from "./effects";

const simpleCalcReducer = combineReducers({
  mathReducer,
  effectsReducer,
});

export type SimpleCalcReducer = ReturnType<
  typeof simpleCalcReducer
>;

export default simpleCalcReducer;
