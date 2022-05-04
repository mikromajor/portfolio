import { compareUtils } from "./compareUtils";
import {
  UserType,
  CurrentUser,
} from "../../../types/dragCardsType";

const combineUsersUtils = (
  users: UserType[],
  draggingUser: CurrentUser,
  dropUser: CurrentUser
) => {
  if (draggingUser && dropUser) {
    const newState = users
      .map((prevUser) => {
        if (
          dropUser.login.uuid === draggingUser.login.uuid
        ) {
          return { ...prevUser };
        }
        if (
          prevUser.login.uuid === draggingUser?.login.uuid
        ) {
          return null;
        }
        if (prevUser.login.uuid === dropUser.login.uuid) {
          return {
            ...draggingUser,
            another: [
              ...prevUser.another,
              ...draggingUser.another,
              { ...prevUser, another: [] },
            ],
          };
        }
        return prevUser;
      })
      .filter((obj) =>
        obj ? true : false
      ) as unknown as UserType[];

    newState.sort(compareUtils);

    return newState;
  }
  return users;
};
export default combineUsersUtils;
