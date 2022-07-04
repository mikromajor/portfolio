export enum SIMPLE_CALC_ACTIONS {
  SET_NUMBER = "SET_NUMBER",
  SET_OPERATOR = "SET_OPERATOR",
  SET_EXTRA_OPERATOR = "SET_EXTRA_OPERATOR",
  SET_DATE_1 = "SET_DATE_1",
  SET_DATE_2 = "SET_DATE_2",
  CALC_DATE = "CALC_DATE",

  OPEN_CLOSE_SIDE_BAR = "OPEN_CLOSE_SIDE_BAR",
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
}

const {
  SET_NUMBER,
  SET_OPERATOR,
  OPEN_CLOSE_SIDE_BAR,
  SET_EXTRA_OPERATOR,
  SET_DATE_1,
  SET_DATE_2,
  CALC_DATE,
} = SIMPLE_CALC_ACTIONS;

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
export const setExtraOperator = (payload: string) => ({
  type: SET_EXTRA_OPERATOR,
  payload,
});

export type setOperatorType = typeof setOperator;

export const setSideBar = () => ({
  type: OPEN_CLOSE_SIDE_BAR,
});

export const setDate1 = (payload: string) => ({
  type: SET_DATE_1,
  payload,
});

export const setDate2 = (payload: string) => ({
  type: SET_DATE_2,
  payload,
});
export type CalcDateType = {
  type: SIMPLE_CALC_ACTIONS.CALC_DATE;
  firstDate: string;
  secondDate: string;
};
export const calcDate = (
  firstDate: string,
  secondDate: string
) => ({
  type: CALC_DATE,
  firstDate,
  secondDate,
});
