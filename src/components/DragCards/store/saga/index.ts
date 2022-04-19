import { all } from "redux-saga/effects";
import { userWatcher } from "./usersFetch";

export function* rootWatcher() {
  yield all([userWatcher()]); //здесь через запятую остальные асинхр вотчеры
}
