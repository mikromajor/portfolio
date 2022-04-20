import { rootReducer } from "./.";
import { TYPE_ACTIONS } from "./constants";

export type rootReducerType = ReturnType<
  typeof rootReducer
>;

type Actions = typeof TYPE_ACTIONS;
export type ActionType = keyof Actions;

export interface RawUserType {
  name: { title: string; first: string; last: string };
  picture: { large: string };
  id: number;
  login: { uuid: string };
  //another: UserType[];
}
export type UserType = RawUserType & {
  another: RawUserType[];
};
// interface UserType2 extends  RawUserType{another:RawUserType[]} //the same

// export type RawUserType = Partial<UserType>;
export type CurrentUser = UserType | undefined;

export interface LoadReducer {
  loader: boolean;
  error: string | null;
}
