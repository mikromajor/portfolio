import {
  put,
  takeEvery,
  all,
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
import { UserType, RawUserType } from "../types";

const { FETCH_USERS } = TYPE_ACTIONS;

const fetchUsersFromApi = () =>
  fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=10"
  );
type FetchType = SagaReturnType<typeof fetchUsersFromApi>;

function* fetchUserWorker() {
  yield put(setLoading());
  try {
    const response: FetchType = yield call(
      fetchUsersFromApi
    );

    if (response.ok) {
      const rawUsers: RawUserType[] = yield response.json();
      const users = rawUsers.map((o, i) => ({
        ...o,
        another: [],
        id: i + Math.random(),
      }));
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
}
