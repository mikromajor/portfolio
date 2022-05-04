import { TYPE_ACTIONS } from "../constants";
import { ActionType, LoadReducer } from "../types";

const { LOADED, LOADING, ERROR } = TYPE_ACTIONS;

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
