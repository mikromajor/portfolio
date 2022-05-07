import { MathReducerState } from "../mathReducer";

export const calculation = (newState: MathReducerState) => {
  const { x, y, operator } = newState;
  const X = Number(x);
  const Y = Number(y);

  try {
    switch (operator) {
      case "Operation":
        newState.error = "operator not selected";
        break;
      case "+":
        newState.result = Math.floor((X + Y) * 100) / 100;
        break;
      case "-":
        newState.result = Math.floor((X - Y) * 100) / 100;
        break;
      case "/":
        if (Y === 0) {
          newState.error = "Can't be divided by zero.";
        } else {
          newState.result = Math.floor((X / Y) * 100) / 100;
        }
        break;
      case "*":
        newState.result = X * Y;
        break;
      case "^":
        newState.result =
          Math.floor(Math.pow(X, Y) * 100) / 100;
        break;
    }
  } catch (e) {
    newState.error = "ups " + e;
  } finally {
    newState.operator = "Operation";
    return newState;
  }
};
