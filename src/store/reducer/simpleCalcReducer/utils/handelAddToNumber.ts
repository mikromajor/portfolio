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
  return (amount =
    amount === "0" ? addAmount : amount + addAmount);
};

export const handelAddToNumber = (
  newState: MathReducerState,
  payload: string
) => {
  const { x, y, operator } = newState;

  if (operator === "Operation") {
    newState.x = handelNewAmount(x, payload);
  } else {
    newState.y = handelNewAmount(y, payload);
  }

  return newState;
};
