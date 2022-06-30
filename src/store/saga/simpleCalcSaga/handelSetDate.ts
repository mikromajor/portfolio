import { put, takeEvery, call } from "redux-saga/effects";
import {
  saveUserDate,
  SetDateActionType,
} from "../../actions/SIMPLE_CALC_ACTIONS";
import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";

const getDate = (userDate: string) => new Date(userDate);

function* setDateWorker(action: SetDateActionType) {
  const date: Date = yield call(getDate, action.payload);
  yield put(saveUserDate(date));
}

export function* handelSetDateWatcher() {
  yield takeEvery(
    SIMPLE_CALC_ACTIONS.SET_DATE,
    setDateWorker
  );
}
