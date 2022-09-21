import { useState } from "react";
import { HeadMenu } from "./HeadMenu";
import FavoriteList from "./FavoriteList/FavoriteList";
import FilmsList from "./FilmsList/FilmsList";
import { Film } from "../constants/types";
import { Loader } from "../../../ui";

function GalleriaFilms() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyWordSort, setKeyWordSort] =
    useState<string>("");
  const [filmsData, setFilmsData] = useState<Film[]>([]);
  const [favoriteList, setFavoriteList] = useState<Film[]>(
    []
  );
  const [showFavoriteList, setShowFavoriteList] =
    useState(false);
  console.log();

  return (
    <>
      <HeadMenu
        setFilmsData={setFilmsData}
        setIsLoading={setIsLoading}
        keyWordSort={keyWordSort}
        setKeyWordSort={setKeyWordSort}
        setShowFavoriteList={setShowFavoriteList}
        showFavoriteList={showFavoriteList}
        favoriteList={favoriteList} //set counter
      />
      {isLoading ? (
        <Loader />
      ) : showFavoriteList ? (
        <FavoriteList
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
        />
      ) : (
        <FilmsList
          filmsData={filmsData}
          setFilmsData={setFilmsData}
          favoriteList={favoriteList}
          setFavoriteList={setFavoriteList}
          keyWordSort={keyWordSort}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default GalleriaFilms;
