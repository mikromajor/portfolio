//import { useCallback } from "react";
import { Film } from "../../../constants/types";
//import { useSortingProps } from "./useSorting.types";

const sorting = (
  keyWordSort: string,
  filmsList: Film[],
  setFilmsList: React.Dispatch<React.SetStateAction<Film[]>>
) => {
  if (
    keyWordSort.length &&
    filmsList.length &&
    filmsList.every(
      (obj) =>
        typeof obj[keyWordSort] === "string" || "number"
    )
  ) {
    setFilmsList(
      [...filmsList].sort((a, b) => {
        if (keyWordSort === "original_title") {
          return a[keyWordSort] > b[keyWordSort] ? 1 : -1;
        }
        if (
          keyWordSort === "release_date" ||
          "vote_average" ||
          "vote_count"
        ) {
          return a[keyWordSort] < b[keyWordSort] ? 1 : -1;
        } else {
          return 0;
        }
      })
    );
  }
};

export default sorting;
