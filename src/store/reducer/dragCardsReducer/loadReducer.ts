import { DRAG_CARDS_ACTIONS } from "../../ACTIONS/DRAG_CARDS_ACTIONS";
import {
  ActionType,
  LoadReducer,
} from "../../types/dragCardsType";

const { LOADED, LOADING, ERROR } = DRAG_CARDS_ACTIONS;

const initLoadState: LoadReducer = {
  loader: false,
  error: null,
};
type LoadAction = { type: ActionType; payload: string };

export default function loadReducer(
  state = initLoadState,
  action: LoadAction
) {
  switch (action.type) {
    case LOADED:
      return { ...state, loader: false };
    case LOADING:
      return { ...state, loader: true, error: null };
    case ERROR:
      return {
        ...state,
        loader: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export const setLoading = () => ({ type: LOADING });
export const setLoaded = () => ({ type: LOADED });
export const setError = (error: string) => ({
  type: ERROR,
  payload: error,
});
