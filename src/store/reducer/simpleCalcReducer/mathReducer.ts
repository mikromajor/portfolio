import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";
import { ActionType } from "../../types/simpleCalcType";
import { calculation, handelAddToNumber } from "./utils";
const { SET_NUMBER, SET_OPERATOR } = SIMPLE_CALC_ACTIONS;

export type MathReducerState = {
  x: string;
  y: string;
  operator: string;
  result: string;
  error: string;
};

type MathReducerAction = {
  type: ActionType;
  payload: string;
};

const initState: MathReducerState = {
  x: "",
  y: "",
  operator: "",
  result: "",
  error: "",
};

export const mathReducer = (
  state: MathReducerState = initState,
  action: MathReducerAction
) => {
  const newState = { ...state, error: "" };

  switch (action.type) {
    case SET_NUMBER:
      return handelAddToNumber(newState, action.payload);
    case SET_OPERATOR:
      if (action.payload === "=") {
        return calculation(newState, undefined);
      }

      if (action.payload === "C") {
        return initState;
      }

      if (newState.x && newState.y && action.payload) {
        return calculation(newState, action.payload);
      }

      newState.result += action.payload;
      newState.operator = action.payload;
      return newState;
    default:
      return { ...state };
  }
};
