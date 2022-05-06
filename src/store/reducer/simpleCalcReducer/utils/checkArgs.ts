import { MathReducerState } from "../mathReducer";

export const checkArgs = (state: MathReducerState) => {
  const { x, y } = state;

  if (x === "") {
    return "first argument is invalid";
  }
  if (y === "") {
    return "second argument is invalid";
  }
};
