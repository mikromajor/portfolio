import {
  put,
  takeLatest,
  call,
  SagaReturnType,
} from "redux-saga/effects";
import { setUsers } from "../reducers/userReducer";
import {
  setLoading,
  setLoaded,
  setError,
} from "../reducers/loadReducer";
import { TYPE_ACTIONS } from "../constants";
import { RawUserType } from "../types";
import { compareUtils } from "../../store/reducers/utilities/compareUtils";
//  import { action } from "typesafe-actions";
import { ActionType } from "../types";

const { FETCH_USERS, FETCH_MAN, FETCH_WOMEN } =
  TYPE_ACTIONS;

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
