import { AboutMe, PetProjects } from "./components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/searcher'>
          <Button variant={"secondary"}>
            GitHubSearcher
          </Button>
        </Link>
        <Link to='/films'>
          <Button variant={"secondary"}>
            GalleriaFilms
          </Button>
        </Link>
        <Link to='/dragCards'>
          <Button variant={"secondary"}>DragCards</Button>
        </Link>
        <Link to='/covid'>
          <Button variant={"secondary"}>Covid</Button>{" "}
        </Link>
        <Link to='/covid-19'>
          <Button variant={"secondary"}>Covid-19</Button>
        </Link>

        {/* <Link to='/users_card_list'>
          Go to users_card_list
        </Link> */}
        {/* <Link to='/stopwatch'>Go to stopwatch</Link> */}
        <Link to='/stopWatch'>
          <Button variant={"secondary"}>StopWatch</Button>
        </Link>
        <Link to='/calc'>
          <Button variant={"secondary"}>Calculator</Button>
        </Link>
      </div>
      <div className='profile'>
        <AboutMe />
        <PetProjects />
      </div>
    </>
  );
};
