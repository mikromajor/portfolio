import { SIMPLE_CALC_ACTIONS } from "../actions/SIMPLE_CALC_ACTIONS";

type SimpleCalcActions = typeof SIMPLE_CALC_ACTIONS;
export type ActionType = keyof SimpleCalcActions;
