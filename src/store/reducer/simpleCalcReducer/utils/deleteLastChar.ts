import { MathReducerState } from "../mathReducer";

export const deleteLastChar = (
  newState: MathReducerState
) => {
  const { x, y, operator } = newState;
  if (!operator) {
    newState.x = x.slice(0, x.length - 1);
  } else {
    if (!y.length) {
      newState.operator = "";
    } else {
      newState.y = y.slice(0, y.length - 1);
    }
  }
  newState.result = newState.result.slice(
    0,
    newState.result.length - 1
  );
  return newState;
};
