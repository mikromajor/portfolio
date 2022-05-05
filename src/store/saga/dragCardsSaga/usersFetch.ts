import {
  put,
  takeLatest,
  call,
  SagaReturnType,
} from "redux-saga/effects";
import { setUsers } from "../../reducer/dragCardsReducer/userReducer";
import {
  setLoading,
  setLoaded,
  setError,
} from "../../reducer/dragCardsReducer/loadReducer";
import { DRAG_CARDS_ACTIONS } from "../../actions/DRAG_CARDS_ACTIONS";
import { RawUserType } from "../../types/dragCardsType";
import { compareUtils } from "../../reducer/dragCardsReducer/utilities/compareUtils";
import { ActionType } from "../../types/dragCardsType";

const { FETCH_USERS, FETCH_MAN, FETCH_WOMEN } =
  DRAG_CARDS_ACTIONS;

const fetchUsersFromApi = (amountUsers: string = "10") =>
  fetch(
    "https://randomuser.me/api/?results=" + amountUsers
  );

interface FetchActionType {
  type: ActionType;
  payload: string;
  gender?: RawUserType["gender"];
}
type FetchType = SagaReturnType<typeof fetchUsersFromApi>;

function* fetchUserWorker(action: FetchActionType) {
  const { gender } = action;
  yield put(setLoading());
  try {
    const response: FetchType = yield call(
      fetchUsersFromApi,
      action?.payload
    );

    if (response.ok) {
      const responseObj: { results: RawUserType[] } =
        yield response.json();
      //add new properties another:[], modernize id and sort array users
      const users = responseObj.results
        .map((o, i) => ({
          ...o,
          another: [],
          id: i + Math.random(),
        }))
        .filter((o) =>
          !gender
            ? true
            : gender === o.gender
            ? true
            : false
        )
        .sort(compareUtils);

      yield put(setLoaded());
      yield put(setUsers(users));
    } else {
      throw response.status;
    }
  } catch (error) {
    yield put(setLoaded());
    yield put(setUsers([]));
    yield put(
      setError(
        "Ups. Problem with a response from the server"
      )
    );
    throw error;
  }
}

export function* userWatcher() {
  yield takeLatest(FETCH_USERS, fetchUserWorker);
  yield takeLatest(FETCH_MAN, fetchUserWorker);
  yield takeLatest(FETCH_WOMEN, fetchUserWorker);
}
