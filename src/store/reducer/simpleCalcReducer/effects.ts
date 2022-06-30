import { SIMPLE_CALC_ACTIONS } from "../../actions/SIMPLE_CALC_ACTIONS";

type EffectsAction = {
  type: SIMPLE_CALC_ACTIONS;
};
type EffectsState = { sideBare: boolean };

const initState: EffectsState = {
  sideBare: false,
};

export const effectsReducer = (
  state: EffectsState = initState,
  action: EffectsAction
) => {
  switch (action.type) {
    case SIMPLE_CALC_ACTIONS.OPEN_CLOSE_SIDE_BAR:
      return { sideBare: !state.sideBare };
    default:
      return { ...state };
  }
};
