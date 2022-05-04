import { all } from "redux-saga/effects";
import { dragCardsRootWatcher } from "./dragCardsSaga";

export function* rootWatcher() {
  yield all([dragCardsRootWatcher()]); //здесь через запятую остальные асинхр вотчеры ,
}
