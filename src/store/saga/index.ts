import { all } from "redux-saga/effects";
import { dragCardsRootWatcher } from "./dragCardsSaga";
import { simpleCalcRootWatcher } from "./simpleCalcSaga";

export function* rootWatcher() {
  yield all([
    dragCardsRootWatcher(),
    simpleCalcRootWatcher(),
  ]);
}
