import { TYPE_ACTIONS } from "../constants";
import { UserType, ActionType } from "../types";

const {
  START_FLIP_THROUGH,
  SET_FLIP_THROUGH,
  STOP_FLIP_THROUGH,
} = TYPE_ACTIONS;

interface stateFlipThroughReducer {
  showImg: undefined | string;
  userId: undefined | number;
}
const initState: stateFlipThroughReducer = {
  showImg: undefined,
  userId: undefined,
};

export function flipThroughReducer(
  state = initState,
  action: { type: ActionType; user: UserType; url: string }
) {
  switch (action.type) {
    case SET_FLIP_THROUGH:
      return {
        ...state,
        showImg: action.url,
        userId: action.user.id,
      };
    default:
      return state;
  }
}

export const startFlipThrough = (user: UserType) => ({
  type: START_FLIP_THROUGH,
  condition: true,
  user,
});
export type StartStopFlipThrough = ReturnType<
  typeof startFlipThrough
>;
export const setFlipThrough = (
  user: UserType,
  url: string
) => ({
  type: SET_FLIP_THROUGH,
  user,
  url,
});
export const stopFlipThrough = () => ({
  type: STOP_FLIP_THROUGH,
});
