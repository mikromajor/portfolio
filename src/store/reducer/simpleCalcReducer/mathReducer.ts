import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";
import { ActionType } from "../../types/simpleCalcType";
import { checkArgs, calculation } from "./utils";
const { SET_X, SET_Y, SET_OPERATOR, CALCULATE } =
  SIMPLE_CALC_ACTIONS;

const initState = {
  x: 0,
  y: 0,
  operator: "",
  result: "",
  error: "",
};
export type MathReducerState = {
  x: number;
  y: number;
  operator: string;
  result: number | string;
  error: string;
};

type MathReducerAction = {
  type: ActionType;
  payload?: string | number;
};

export const mathReducer = (
  state: MathReducerState = initState,
  action: MathReducerAction
) => {
  switch (action.type) {
    case SET_X:
      return { ...state, x: action.payload };
    case SET_Y:
      return { ...state, y: action.payload };
    case SET_OPERATOR:
      return { ...state, operator: action.payload };
    case CALCULATE:
      let validMessage = checkArgs(state);
      if (validMessage) {
        return { ...state, error: validMessage };
      }
      return calculation(state);
    default:
      return { ...state };
  }
};
