import { MathReducerState } from "../../../types/simpleCalcType";

export const calculateExtraOperators = (
  newState: MathReducerState,
  extraOperator: string
) => {
  const X = Number(newState.x);
  switch (extraOperator) {
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
      newState.result = Math.PI * Math.pow(X, 2) + "";
      break;
    case "VolBall":
      newState.result =
        (4 / 3) * Math.PI * Math.pow(X, 2) + "";
      break;
  }
  return newState;
};
