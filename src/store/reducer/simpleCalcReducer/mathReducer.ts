import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";
import { ActionType } from "../../types/simpleCalcType";
import {
  checkArgs,
  calculation,
  handelAddToNumber,
} from "./utils";
const {
  SET_X,
  SET_Y,
  SET_OPERATOR,
  CALCULATE,
  ADD_TO_NUMBER,
  RESET,
} = SIMPLE_CALC_ACTIONS;

const initState = {
  x: "0",
  y: "0",
  operator: "Operation",
  result: "",
  error: "",
};
export type MathReducerState = {
  x: string;
  y: string;
  operator: string;
  result: number | string;
  error: string;
};

type MathReducerAction = {
  type: ActionType;
  payload: string;
};

export const mathReducer = (
  state: MathReducerState = initState,
  action: MathReducerAction
) => {
  const newState = { ...state, error: "" };
  if (action.payload === "=") action.type = "CALCULATE";

  switch (action.type) {
    case SET_X:
      return { ...state, x: action.payload };
    case SET_Y:
      return { ...state, y: action.payload };
    case SET_OPERATOR:
      return { ...state, operator: action.payload };
    case ADD_TO_NUMBER:
      return handelAddToNumber(newState, action.payload);
    case CALCULATE:
      let validMessage = checkArgs(state);
      if (validMessage) {
        return { ...state, error: validMessage };
      }
      return calculation(newState);
    case RESET:
      return initState;
    default:
      return { ...state };
  }
};
