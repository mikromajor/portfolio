import { MathReducerState } from "../mathReducer";

export const calculation = (state: MathReducerState) => {
  const { x, y, operator } = state;
  const newState = { ...state, error: "" };
  try {
    switch (operator) {
      case "+":
        newState.result = x + y;
        break;
      case "-":
        newState.result = x - y;
        break;
      case "/":
        if (y === 0) {
          newState.error = "Cannot be divided by zero.";
        } else {
          newState.result = (Math.floor(x / y) * 100) / 100;
        }
        break;
      case "*":
        newState.result = x * y;
        break;
      case "^":
        newState.result =
          Math.floor(Math.pow(x, y) * 100) / 100;
        break;
    }
  } catch (e) {
    newState.error = "ups " + e;
  } finally {
    return newState;
  }
};
