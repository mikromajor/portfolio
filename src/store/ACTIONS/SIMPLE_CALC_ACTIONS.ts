export const SIMPLE_CALC_ACTIONS = {
  SET_X: "SET_X",
  SET_Y: "SET_Y",
  SET_OPERATOR: "SET_OPERATOR",
  CALCULATE: "CALCULATE",

  LOADED: "LOADED",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const { SET_X, SET_Y, SET_OPERATOR, CALCULATE } =
  SIMPLE_CALC_ACTIONS;

export const setX = (x: string) => {
  if (!x) {
    x = "0";
  }
  return {
    type: SET_X,
    payload: Number(x),
  };
};
export const setY = (y: string) => {
  if (!y) {
    y = "0";
  }
  return {
    type: SET_Y,
    payload: Number(y),
  };
};
export const setOperator = (payload: string) => ({
  type: SET_OPERATOR,
  payload,
});
export const calculate = () => ({ type: CALCULATE });
