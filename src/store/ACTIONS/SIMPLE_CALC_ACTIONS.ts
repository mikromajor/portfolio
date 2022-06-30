export enum SIMPLE_CALC_ACTIONS {
  SET_NUMBER = "SET_NUMBER",
  SET_OPERATOR = "SET_OPERATOR",
  SET_EXTRA_OPERATOR = "SET_EXTRA_OPERATOR",
  SET_DATE = "SET_DATE",
  SAVE_DATE = "SAVE_DATE",

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
  SET_DATE,
  SAVE_DATE,
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

export type SetDateActionType = {
  type: typeof SET_DATE;
  payload: string;
};

export const setUserDate = (
  payload: string
): SetDateActionType => ({
  type: SET_DATE,
  payload,
});
export const saveUserDate = (date: Date) => ({
  type: SAVE_DATE,
  date,
});
