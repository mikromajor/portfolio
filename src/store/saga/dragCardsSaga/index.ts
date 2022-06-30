import { all } from "redux-saga/effects";
import { userWatcher } from "./usersFetch";
import { flipThroughWatcher } from "./flipThroughUserImg";

export function* dragCardsRootWatcher() {
  yield all([userWatcher(), flipThroughWatcher()]);
}
