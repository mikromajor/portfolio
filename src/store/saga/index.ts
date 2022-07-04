import { all } from "redux-saga/effects";
import { dragCardsRootWatcher } from "./dragCardsSaga";
import { simpleCalcRootWatcher } from "./simplCalcSaga";

export function* rootWatcher() {
  yield all([
    dragCardsRootWatcher(),
    simpleCalcRootWatcher(),
  ]);
}
