import { Film } from "../../constants/types";

export type FilmsListProps = {
  filmsData: Film[];
  setFilmsData: React.Dispatch<
    React.SetStateAction<Film[]>
  >;
  favoriteList: Film[];
  setFavoriteList: React.Dispatch<
    React.SetStateAction<Film[]>
  >;
  keyWordSort: string;
  isLoading: boolean;
};
