export const ALL_OPERATORS = [
  "Operation",
  "C",
  "=",
  "+",
  "-",
  "*",
  "/",
  "^",
  ".",
];
const BUTTONS = [
  ".",
  "0",
  "=",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const putOnRows = (arr: string[]) => {
  const auxiliary = [];
  while (arr.length) {
    auxiliary.push(arr.splice(0, 3));
  }
  return auxiliary
    .reverse()
    .reduce((ak, el) => [...ak, ...el]);
};
export const SORTED_BUTTONS = putOnRows(BUTTONS);
