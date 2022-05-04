import { UserType } from "../../../types/dragCardsType";
export const compareUtils = (
  a: UserType,
  b: UserType
): number => {
  if (a.name.first >= b.name.first) return 1;
  if (a.name.first <= b.name.first) {
    return -1;
  } else {
    return 0;
  }
};
