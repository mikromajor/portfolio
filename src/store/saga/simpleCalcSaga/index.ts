import { all } from "redux-saga/effects";
import { handelSetDateWatcher } from "./handelSetDate";

export function* simpleCalcRootWatcher() {
  yield all([handelSetDateWatcher()]);
}
