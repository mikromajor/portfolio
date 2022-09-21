import getFetch from "./getFetch";
import {
  API_URL,
  API_KEY,
  PATH_3,
} from "../constants/constants";
import { Film } from "../constants/types";

const getMovies = (
  genres: string[],
  setFilmsData: React.Dispatch<
    React.SetStateAction<Film[]>
  >,
  setIsLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >
) => {
  let url = "";
  if (genres.length) {
    url = `${API_URL}/discover/movie?api_key=${API_KEY}${PATH_3}&with_genres=${genres.join()}`;

    setIsLoading(true);
    getFetch(url)
      .then((obj) => {
        setFilmsData(obj.results);
        setIsLoading(false);
      })
      .catch((e) => console.log("ups!!!", e));
  } else {
    //print: 'please choose genre'
    setFilmsData([]);
  }
};

export default getMovies;
