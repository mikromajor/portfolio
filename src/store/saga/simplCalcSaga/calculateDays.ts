import {
  put,
  call,
  takeLatest,
  SagaReturnType,
} from "redux-saga/effects";
import {
  SIMPLE_CALC_ACTIONS,
  CalcDateType,
  setNumb,
} from "../../ACTIONS/SIMPLE_CALC_ACTIONS";
const { CALC_DATE } = SIMPLE_CALC_ACTIONS;

const getDate = ({
  firstDate,
  secondDate,
}: CalcDateType) => {
  const msFirst = new Date(firstDate) as unknown as number;
  const msSecond = new Date(
    secondDate
  ) as unknown as number;
  return Math.trunc((msSecond - msFirst) / 86400000) + "";
};

type GetDateType = SagaReturnType<typeof getDate>;

function* calculateDateWorker(action: CalcDateType) {
  console.log("calculateDateWorker fire");

  if (action.firstDate && action.secondDate) {
    const days: GetDateType = yield call(getDate, action);
    yield put(setNumb(days));
  } else {
    // yield put(setError('Please, set dates'));//TODO
    put(setNumb("0"));
  }
}

export function* calcDateWatcher() {
  yield takeLatest(CALC_DATE, calculateDateWorker);
}
