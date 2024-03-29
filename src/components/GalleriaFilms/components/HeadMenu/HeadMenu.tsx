import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ToggleButton,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  DropdownGenre,
  DropdownSort,
  Counter,
} from "../UI";
import { getMovies } from "../../api";
import { OPTIONS } from "../../constants/constants";
import { handlerGenre } from "./handlers";
import { HeadMenuProps } from "./HeadMenu.types";
import "./HeadMenu.css";

const HeadMenu = ({
  setFilmsData,
  keyWordSort,
  setKeyWordSort,
  setShowFavoriteList,
  showFavoriteList,
  favoriteList,
  setIsLoading,
}: HeadMenuProps) => {
  const [genres, setGenres] = useState<string[]>([
    "14",
    "16",
    "28",
    "35",
    "878",
  ]);

  return (
    <Navbar
      variant='dark'
      bg='dark'
      expand='lg'
      fixed='top'
    >
      <Navbar.Brand>FilmsTime</Navbar.Brand>

      <Navbar.Toggle aria-controls='navbar-dark-example' />
      <Navbar.Collapse id='navbar-dark-example'>
        <Nav>
          <DropdownGenre
            getGenre={(
              valGenre: string,
              checked: boolean
            ) => {
              handlerGenre(
                genres,
                setGenres,
                valGenre,
                checked
              );
            }}
          />
          <Button
            variant={"primary"}
            onClick={() =>
              getMovies(genres, setFilmsData, setIsLoading)
            }
          >
            Click to load
          </Button>
          <DropdownSort
            options={OPTIONS}
            defaultName={"Sort"}
            value={keyWordSort}
            setKeyWordSort={setKeyWordSort}
          />
          <ToggleButton
            id='toggle-check'
            type='checkbox'
            variant='outline-light'
            checked={showFavoriteList}
            value=''
            onChange={(e) =>
              setShowFavoriteList(e.currentTarget.checked)
            }
          >
            My favoriteList
          </ToggleButton>
          <Counter favoriteList={favoriteList} />
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        <Link to='/portfolio'>BACK</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default HeadMenu;
