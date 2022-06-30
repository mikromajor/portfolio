import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";
import {
  MathReducerState,
  MathReducerAction,
} from "../../types/simpleCalcType";
import {
  calculation,
  deleteLastChar,
  handelAddToNumber,
  calculateExtraOperators,
  handelDate,
} from "./utils";

const {
  SET_NUMBER,
  SET_OPERATOR,
  SET_EXTRA_OPERATOR,
  SAVE_DATE,
} = SIMPLE_CALC_ACTIONS;

const initState: MathReducerState = {
  x: "",
  y: "",
  firstDate: undefined,
  secondDate: undefined,
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
      if (action.payload === "DEL") {
        return deleteLastChar(newState);
      }

      if (newState.x && newState.y && action.payload) {
        return calculation(newState, action.payload);
      }

      newState.result += action.payload;
      newState.operator = action.payload;
      return newState;
    case SET_EXTRA_OPERATOR:
      return calculateExtraOperators(
        newState,
        action.payload
      );
    case SAVE_DATE:
      return handelDate(newState, action.date);
    default:
      return { ...state };
  }
};
