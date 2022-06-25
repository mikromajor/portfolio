import { createSelector } from "reselect";
import { StateType } from "../reducer";

export const getStore = (state: StateType) =>
  state.simpleCalcReducer.mathReducer;

export const getSideBare = (state: StateType) =>
  state.simpleCalcReducer.effectsReducer.sideBare;

export const getStoreSelector = createSelector(
  getStore,
  (e) => e
); //  - создает мемоизированый селектор
