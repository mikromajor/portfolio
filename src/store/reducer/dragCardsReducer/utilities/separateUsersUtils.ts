import { compareUtils } from "./compareUtils";
import {
  UserType,
  CurrentUser,
} from "../../../types/dragCardsType";

const separateUsersUtils = (
  users: UserType[],
  draggingUser: CurrentUser
) => {
  if (draggingUser && draggingUser.another.length) {
    const anotherLast =
      draggingUser.another[draggingUser.another.length - 1];
    //create a new user card that will have a arr drop's Users
    const lastUser = {
      ...anotherLast,
      another: draggingUser.another
        .filter(
          (o) => o.login.uuid !== anotherLast.login.uuid
        )
        .map((o) => ({ ...o })),
    };
    //cleaning the oldest user that holds arr-store
    const onlyOldUsers = users.map((oldUser) => {
      if (oldUser.login.uuid === draggingUser.login.uuid) {
        return { ...draggingUser, another: [] };
      }
      return { ...oldUser };
    });
    const newState = [...onlyOldUsers, lastUser].sort(
      compareUtils
    );
    return newState;
  }
  return users;
};
export default separateUsersUtils;
