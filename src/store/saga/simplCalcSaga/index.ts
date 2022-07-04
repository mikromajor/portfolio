import { all } from "redux-saga/effects";
import { calcDateWatcher } from "./calculateDays";

export function* simpleCalcRootWatcher() {
  yield all([calcDateWatcher()]);
}
