import { Film } from "../../../../constants/types";

export type FilmProps = {
  film: Film;
  isInFavorites: boolean;
  addToFavoriteList: (id: number) => void;
  deleteFromFavoriteList: (id: number) => void;
};

// (test as unknown) as string
