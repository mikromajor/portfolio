import { MathReducerState } from "../mathReducer";

const handelNewAmount = (
  oldNumber: string,
  newNumber: string
) => {
  if (newNumber === ".") {
    if (oldNumber.includes(".")) {
      return oldNumber;
    }
    return oldNumber.concat(".");
  }
  return oldNumber === "0"
    ? newNumber
    : oldNumber + newNumber;
};

export const handelAddToNumber = (
  newState: MathReducerState,
  payload: string
) => {
  const { x, y, operator } = newState;
  if (!operator) {
    newState.x = handelNewAmount(x, payload);
    newState.result = newState.x;
  } else {
    newState.y = handelNewAmount(y, payload);
    newState.result = newState.y;
  }

  return newState;
};
