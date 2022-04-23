import { all } from "redux-saga/effects";
import { userWatcher } from "./usersFetch";
import { flipThroughWatcher } from "./flipThroughUserImg";

export function* rootWatcher() {
  yield all([userWatcher(), flipThroughWatcher()]); //здесь через запятую остальные асинхр вотчеры ,
}
