import { AboutMe, PetProjects } from "./components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile.scss";

export const Profile = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/git_hub_searcher'>
          <Button variant={"secondary"}>
            Git Hub Searcher
          </Button>
        </Link>
        <Link to='/galleria_films'>
          <Button variant={"secondary"}>
            Galleria Films
          </Button>
        </Link>
        <Link to='/drag_and_drop_card'>
          <Button variant={"secondary"}>
            Drag and drop card
          </Button>
        </Link>
        <Link to='/covid'>
          <Button variant={"secondary"}>Covid</Button>
        </Link>
        <Link to='/stopwatch'>
          <Button variant={"secondary"}>Stopwatch</Button>
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
