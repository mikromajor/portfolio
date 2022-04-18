import { ACTIONS } from "../actions";
import { UserType, Action } from "../types";

const { SET_USERS, FETCH_USERS } = ACTIONS;

const defaultUsersState: UserType[] = [];
type ObjAction = { type: Action; payload: UserType[] };

export default function userReducer(
  state = defaultUsersState,
  action: ObjAction
) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
}

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
export const fetchUsers = () => ({
  type: FETCH_USERS,
});
export const deleteUsers = () => ({
  type: DELETE_USERS,
});
export const deleteUsersVsDelay = () => ({
  type: DELETE_USERS_VS_DELAY,
});
