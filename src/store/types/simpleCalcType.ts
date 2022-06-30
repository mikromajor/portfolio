import { SIMPLE_CALC_ACTIONS } from "../actions/SIMPLE_CALC_ACTIONS";

// type SimpleCalcActions = typeof SIMPLE_CALC_ACTIONS;
// export type ActionType = keyof SimpleCalcActions;

export type MathReducerState = {
  x: string;
  y: string;
  firstDate: Date | undefined;
  secondDate: Date | undefined;
  operator: string;
  result: string;
  error: string;
};

export type MathReducerAction = {
  type: SIMPLE_CALC_ACTIONS;
  payload: string;
  date: Date;
};
