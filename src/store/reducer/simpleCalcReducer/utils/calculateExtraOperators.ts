import { MathReducerState } from "../mathReducer";

export const calculateExtraOperators = (
  newState: MathReducerState,
  extraOperator: string
) => {
  const { x, operator } = newState;
  const X = Number(x);
  switch (operator) {
    case "sin":
      newState.result = Math.sin(X) + "";
      break;
    case "asin":
      newState.result = Math.asin(X) + "";
      break;
    case "cos":
      newState.result = Math.cos(X) + "";
      break;
    case "acos":
      newState.result = Math.acos(X) + "";
      break;
    case "tg":
      newState.result = Math.tan(X) + "";
      break;
    case "atg":
      newState.result = Math.atan(X) + "";
      break;
    case "ctg":
      newState.result = 1 / Math.tan(X) + "";
      break;
    case "actg":
      newState.result = 1 / Math.atan(X) + "";
      break;
    case "PI":
      newState.x = Math.PI + "";
      newState.result = Math.PI + "";
      break;
    case "ArCr":
    case "VolCr":
  }
  return newState;
};
