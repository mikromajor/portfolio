import { rootReducer } from "./.";
import { TYPE_ACTIONS } from "./constants";

export type rootReducerType = ReturnType<
  typeof rootReducer
>;

type Actions = typeof TYPE_ACTIONS;
export type ActionType = keyof Actions;

export interface UserType {
  name: { title: string; first: string; last: string };
  picture: { large: string };
  id: { value: string };
  login: { uuid: string };
  another: UserType[];
}
export type CurrentUser = UserType | undefined;

export interface LoadReducer {
  loader: boolean;
  error: string | null;
}
