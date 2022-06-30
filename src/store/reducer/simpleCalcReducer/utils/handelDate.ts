import { MathReducerState } from "../../../types/simpleCalcType";

export const handelDate = (
  state: MathReducerState,
  payload: Date
) => {
  if (!state.firstDate) {
    state.firstDate = payload;
  } else {
    state.secondDate = payload;
  }
  if (state.firstDate && state.secondDate) {
    state.result =
      (Number(state.firstDate) - Number(state.secondDate)) /
        86400000 +
      "";
  }
  return state;
};
