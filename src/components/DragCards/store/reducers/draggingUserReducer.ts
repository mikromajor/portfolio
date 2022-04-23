import { TYPE_ACTIONS } from "../constants";
import { UserType, ActionType } from "../types";

const { SET_CURRENT_DRAGGING_USER } = TYPE_ACTIONS;

interface ObjAction {
  type: ActionType;
  payload: UserType;
}
const initDruggingUserReducer: {
  currentDraggingUser: UserType | undefined;
} = { currentDraggingUser: undefined };

export default function druggingUserReducer(
  state = initDruggingUserReducer,
  action: ObjAction
) {
  switch (action.type) {
    case SET_CURRENT_DRAGGING_USER:
      return {
        ...state,
        currentDraggingUser: action.payload,
      };
    default:
      return state;
  }
}

export const setCurrentDruggingUser = (
  payload: UserType
) => ({
  type: SET_CURRENT_DRAGGING_USER,
  payload,
});
