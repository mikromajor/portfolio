import { MathReducerState } from "../../../types/simpleCalcType";

export const handelDate = (state: MathReducerState) => {
  if (state.firstDate && state.secondDate) {
    state.result =
      (Number(state.firstDate) - Number(state.secondDate)) /
        86400000 +
      "";
  } else {
    state.error = "Please, set date";
  }
  return state;
};
