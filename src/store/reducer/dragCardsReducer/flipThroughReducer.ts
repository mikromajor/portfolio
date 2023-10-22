import { DRAG_CARDS_ACTIONS } from "../../ACTIONS/DRAG_CARDS_ACTIONS";
import {
  UserType,
  RawUserType,
  ActionType,
} from "../../types/dragCardsType";

const {
  START_FLIP_THROUGH,
  SET_FLIP_THROUGH,
  STOP_FLIP_THROUGH,
} = DRAG_CARDS_ACTIONS;

interface stateFlipThroughReducer {
  liningUser: undefined | UserType;
  idUser: undefined | number;
}
const initState: stateFlipThroughReducer = {
  liningUser: undefined,
  idUser: undefined,
};

export function flipThroughReducer(
  state = initState,
  action: ActionSetFlipThrough
) {
  switch (action.type) {
    case SET_FLIP_THROUGH:
      return {
        ...state,
        liningUser: action.liningUser,
        idUser: action.idUser,
      };
    default:
      return state;
  }
}

export const startFlipThrough = (user: UserType) => ({
  type: START_FLIP_THROUGH,
  user,
});
export type StartFlipThrough = ReturnType<
  typeof startFlipThrough
>;
export const setFlipThrough = (
  liningUser: RawUserType,
  idUser: number
) => ({
  type: SET_FLIP_THROUGH,
  liningUser,
  idUser,
});
export type ActionSetFlipThrough = ReturnType<
  typeof setFlipThrough
>;
export const stopFlipThrough = () => ({
  type: STOP_FLIP_THROUGH,
});
