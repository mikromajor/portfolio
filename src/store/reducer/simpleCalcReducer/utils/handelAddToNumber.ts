import { MathReducerState } from "../mathReducer";

const handelNewAmount = (
  amount: string,
  addAmount: string
) => {
  if (addAmount === ".") {
    if (amount.includes(".")) {
      return amount;
    }
    return amount.concat(".");
  }
  return amount === "0" ? addAmount : amount + addAmount;
};

export const handelAddToNumber = (
  newState: MathReducerState,
  payload: string
) => {
  const { x, y, operator } = newState;
  if (!operator) {
    newState.x = handelNewAmount(x, payload);
    newState.result += newState.x;
  } else {
    newState.y = handelNewAmount(y, payload);
    newState.result += newState.y;
  }

  return newState;
};
