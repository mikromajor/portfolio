import { createSelector } from "reselect";
import { StateType } from "../reducer";

const getStore = (state: StateType) =>
  state.simpleCalcReducer.mathReducer;

export const getStoreSelector = createSelector(
  getStore,
  (u) => u
); //  - создает мемоизированый селектор
