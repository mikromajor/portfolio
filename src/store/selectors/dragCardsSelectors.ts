import { createSelector } from "reselect";
import { StateType } from "../reducer";

const getUsers = (state: StateType) => state.dragCardsReducer.userReducer;
const getLoader = (state: StateType) =>
  state.dragCardsReducer.loadReducer.loader;
const getError = (state: StateType) =>
  state.dragCardsReducer.loadReducer.error;
const getCurrentDraggingUser = (state: StateType) =>
  state.dragCardsReducer.druggingUserReducer;
const getFlipThrough = (state: StateType) =>
  state.dragCardsReducer.flipThroughReducer;

export const getUsersSelector = createSelector(
  getUsers,
  (u) => u
); //  - создает мемоизированый селектор

export const getLoaderSelector = createSelector(
  getLoader,
  (l) => l
);
export const getErrorSelector = createSelector(
  getError,
  (e) => e
);
export const getCurrentDraggingUserSelector =
  createSelector(getCurrentDraggingUser, (c) => c);

export const getFlipThroughSelector = createSelector(
  getFlipThrough,
  (url) => url
);
