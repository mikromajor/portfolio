import { Film } from "../../constants/types";

export type HeadMenuProps = {
  setFilmsData: React.Dispatch<
    React.SetStateAction<Film[]>
  >;
  keyWordSort: string;
  setKeyWordSort: React.Dispatch<
    React.SetStateAction<string>
  >;
  setShowFavoriteList: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showFavoriteList: boolean;
  favoriteList: Film[];
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};
