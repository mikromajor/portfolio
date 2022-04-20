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

type UsersAction = {
  type: ActionType;
  payload: UserType[];
  currentDruggingUser: CurrentUser;
  currentDropUser: CurrentUser;
};

export default function userReducer(
  state: UserType[] = [],
  action: UsersAction
) {
  switch (action.type) {
    case SET_USERS:
      return [...action.payload];
    case COMBINE_USERS:
      return combineUsersUtils(
        state,
        action.currentDruggingUser,
        action.currentDropUser
      );

    case SEPARATE_USERS:
      return separateUsersUtils(
        state,
        action.currentDruggingUser
      );
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
