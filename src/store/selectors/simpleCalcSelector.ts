import { createSelector } from "reselect";
import { StateType } from "../reducer";

export const getStore = (state: StateType) =>
  state.simpleCalcReducer.mathReducer;

export const getSideBare = (state: StateType) =>
  state.simpleCalcReducer.effectsReducer.sideBare;

export const getFirstUserDate = (state: StateType) =>
  state.simpleCalcReducer.mathReducer.firstDate;

export const getSecondUserDate = (state: StateType) =>
  state.simpleCalcReducer.mathReducer.secondDate;

export const getStoreSelector = createSelector(
  getStore,
  (e) => e
); //  - создает мемоизированый селектор
