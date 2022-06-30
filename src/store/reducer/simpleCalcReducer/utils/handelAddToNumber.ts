import { MathReducerState } from "../../../types/simpleCalcType";

const handelNewAmount = (
  oldNumber: string,
  newNumber: string
) => {
  if (newNumber === "+/-") {
    return (newNumber =
      oldNumber[0] === "-"
        ? oldNumber.slice(1)
        : "-" + oldNumber);
  }
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
    newState.result += payload;
  }

  return newState;
};
