import { TYPE_ACTIONS } from "./constants";

type Actions = typeof TYPE_ACTIONS;
export type ActionType = keyof Actions;

export interface RawUserType {
  name: { title: string; first: string; last: string };
  gender: "male" | "female";
  picture: { large: string };
  id: number;
  login: { uuid: string };
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
