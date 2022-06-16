import { MathReducerState } from "../mathReducer";

export const calculation = (
  newState: MathReducerState,
  newOperator: string | undefined
) => {
  const { x, y, operator } = newState;

  if (newState.error) return newState;

  const X = Number(x);
  const Y = Number(y);

  try {
    switch (operator) {
      case "":
        newState.error = "operator not selected";
        break;
      case "+":
        newState.result =
          Math.floor((X + Y) * 100) / 100 + "";
        break;
      case "-":
        newState.result =
          Math.floor((X - Y) * 100) / 100 + "";
        break;
      case "/":
        if (Y === 0) {
          newState.error = "Can't be divided by zero.";
        } else {
          newState.result =
            Math.floor((X / Y) * 100) / 100 + "";
        }
        break;
      case "*":
        newState.result = X * Y + "";
        break;
      case "^":
        newState.result =
          Math.floor(Math.pow(X, Y) * 100) / 100 + "";
        break;
      case "sqrt":
        newState.result =
          Math.floor(Math.sqrt(X) * 100) / 100 + "";
        break;
    }
  } catch (e) {
    newState.error = "ups " + e;
  } finally {
    newState.operator = newOperator ? newOperator : "";
    newState.y = "";
    newState.x = newState.result;
    newState.result += newState.operator;
    return newState;
  }
};
