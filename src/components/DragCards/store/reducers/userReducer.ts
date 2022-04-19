import { TYPE_ACTIONS } from "../constants";
import {
  UserType,
  CurrentUser,
  ActionType,
} from "../types";
import combineUsersUtils from "./utilities/combineUsersUtils";
import separateUsersUtils from "./utilities/separateUsersUtils";
const {
  SET_USERS,
  FETCH_USERS,
  COMBINE_USERS,
  SEPARATE_USERS,
} = TYPE_ACTIONS;

const initState: { users: UserType[] } = {
  users: [],
};

type UsersAction = {
  type: ActionType;
  payload: UserType[];
  currentDruggingUser: CurrentUser;
  currentDropUser: CurrentUser;
};

export default function userReducer(
  state = initState,
  action: UsersAction
) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    case COMBINE_USERS:
      const combineState = combineUsersUtils(
        state.users,
        action.currentDruggingUser,
        action.currentDropUser
      );
      return { ...state, users: combineState };
    case SEPARATE_USERS:
      const separateState = separateUsersUtils(
        state.users,
        action.currentDruggingUser
      );
      return { ...state, users: separateState };
    default:
      return state;
  }
}

export const setUsers = (payload: UserType[]) => ({
  type: SET_USERS,
  payload,
});
export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const combineUsers = (
  currentDruggingUser: CurrentUser,
  currentDropUser: CurrentUser
) => ({
  type: COMBINE_USERS,
  currentDruggingUser,
  currentDropUser,
});
export const separateUsers = (
  currentDruggingUser: CurrentUser
) => ({ type: SEPARATE_USERS, currentDruggingUser });
