import { AboutMe, PetProjects } from "./components";
import { Link } from "react-router-dom";
import "./Profile.scss";

export const Profile = () => {
  return (
    <>
      <div className='navigation'>
        <Link to='/calc'>Go to calculator</Link>
        <Link to='/searcher'>Go to GitHubSearcher</Link>
        <Link to='/films'>Go to GalleriaFilms</Link>
        <Link to='/covid'>Go to Covid</Link>
        <Link to='/covid-19'>Go to Covid-19</Link>
        {/* <Link to='/users_card_list'>
          Go to users_card_list
        </Link> */}
        {/* <Link to='/stopwatch'>Go to stopwatch</Link> */}
        <Link to='/dragCards'>Go to DragCards</Link>
      </div>
      <div className='profile'>
        <AboutMe />
        <PetProjects />
      </div>
    </>
  );
};
