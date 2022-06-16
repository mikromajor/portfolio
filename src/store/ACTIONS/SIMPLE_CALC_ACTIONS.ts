export enum SIMPLE_CALC_ACTIONS {
  SET_NUMBER = "SET_NUMBER",
  SET_OPERATOR = "SET_OPERATOR",

  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

const { SET_NUMBER, SET_OPERATOR } = SIMPLE_CALC_ACTIONS;

export const setNumb = (payload: string) => {
  if (!payload) {
    payload = "0";
  }
  return {
    type: SET_NUMBER,
    payload,
  };
};
export type setNumbType = typeof setNumb;

export const setOperator = (payload: string) => ({
  type: SET_OPERATOR,
  payload,
});
export type setOperatorType = typeof setOperator;
