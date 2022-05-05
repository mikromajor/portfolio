import {
  put,
  delay,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { DRAG_CARDS_ACTIONS } from "../../actions/DRAG_CARDS_ACTIONS";
import {
  StartFlipThrough,
  setFlipThrough,
} from "../../reducer/dragCardsReducer/flipThroughReducer";

//  const delay = (ms:number) => new Promise(resolve => setTimeout(()=>resolve, ms))
let condition: boolean;

function* flipThroughWorker(action: StartFlipThrough) {
  let counter = 0;
  condition = true;

  while (action.user.another.length && condition) {
    yield delay(500);
    if (counter === action.user.another.length) {
      counter = 0;
      yield put(
        setFlipThrough(action.user, action.user.id)
      );
    } else {
      yield put(
        setFlipThrough(
          action.user.another[counter],
          action.user.id
        )
      );
      yield counter++;
    }
    yield delay(500);
  }
  if (!condition || !action.user.another.length) {
    yield put(setFlipThrough(action.user, action.user.id));
  }
}
function stopFlipThroughWorker() {
  condition = false;
}

export function* flipThroughWatcher() {
  yield takeLatest(
    DRAG_CARDS_ACTIONS.START_FLIP_THROUGH,
    flipThroughWorker
  );
  yield takeEvery(
    DRAG_CARDS_ACTIONS.STOP_FLIP_THROUGH,
    stopFlipThroughWorker
  );
}
