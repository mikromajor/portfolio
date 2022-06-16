import { DRAG_CARDS_ACTIONS } from "../../actions/DRAG_CARDS_ACTIONS";
import {
  UserType,
  ActionType,
} from "../../types/dragCardsType";

const { SET_CURRENT_DRAGGING_USER } = DRAG_CARDS_ACTIONS;

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
