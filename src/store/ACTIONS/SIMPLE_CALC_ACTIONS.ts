export const SIMPLE_CALC_ACTIONS = {
  SET_X: "SET_X",
  SET_Y: "SET_Y",
  SET_OPERATOR: "SET_OPERATOR",
  RESET: "RESET",
  ADD_TO_NUMBER: "ADD_TO_NUMBER",
  CALCULATE: "CALCULATE",

  LOADED: "LOADED",
  LOADING: "LOADING",
  ERROR: "ERROR",
};

const {
  SET_X,
  SET_Y,
  SET_OPERATOR,
  CALCULATE,
  ADD_TO_NUMBER,
} = SIMPLE_CALC_ACTIONS;

export const setX = (x: string) => {
  if (!x) {
    x = "0";
  }
  return {
    type: SET_X,
    payload: x,
  };
};
export const setY = (y: string) => {
  if (!y) {
    y = "0";
  }
  return {
    type: SET_Y,
    payload: y,
  };
};
export const setOperator = (payload: string) => ({
  type: SET_OPERATOR,
  payload,
});
export const calculate = () => ({
  type: CALCULATE,
  payload: "",
});

export const addToNumber = (payload: string) => ({
  type: ADD_TO_NUMBER,
  payload,
});
