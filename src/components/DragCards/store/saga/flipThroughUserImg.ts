import {
  put,
  delay,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { TYPE_ACTIONS } from "../constants";
import {
  StartStopFlipThrough,
  setFlipThrough,
} from "../reducers/flipThroughReducer";

//  const delay = (ms:number) => new Promise(resolve => setTimeout(()=>resolve, ms))
let condition: boolean;

function* flipThroughWorker(action: StartStopFlipThrough) {
  let counter = 0;
  condition = true;

  while (action.user.another.length && condition) {
    yield delay(500);
    if (counter === action.user.another.length) {
      counter = 0;
      yield put(
        setFlipThrough(
          action.user,
          action.user.picture.large
        )
      );
    } else {
      yield put(
        setFlipThrough(
          action.user,
          action.user.another[counter].picture.large
        )
      );
      yield counter++;
    }
    yield delay(500);
  }
  if (!condition || !action.user.another.length) {
    yield put(
      setFlipThrough(action.user, action.user.picture.large)
    );
  }
}
function stopFlipThroughWorker() {
  condition = false;
}

export function* flipThroughWatcher() {
  yield takeLatest(
    TYPE_ACTIONS.START_FLIP_THROUGH,
    flipThroughWorker
  );
  yield takeEvery(
    TYPE_ACTIONS.STOP_FLIP_THROUGH,
    stopFlipThroughWorker
  );
}
