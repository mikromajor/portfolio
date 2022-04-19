import { createSelector } from "reselect";

import { StateType } from "./reducers";

const getUsers = (state: StateType) => state.userReducer;
const getLoader = (state: StateType) =>
  state.loadReducer.loader;
const getError = (state: StateType) =>
  state.loadReducer.error;
const getCurrentDraggingUser = (state: StateType) =>
  state.druggingUserReducer;

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
