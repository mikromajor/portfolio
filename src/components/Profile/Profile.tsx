import { AboutMe, PetProjects } from "./components";
import { Link } from "react-router-dom";
import "./Profile.scss";

export const Profile = ({ mes }: { mes: string }) => {
  return (
    <>
      <div className='navigation'>
        <h3 className='indicator'>{mes}</h3>
        <Link to='/calc'>Go to calculator</Link>
        <Link to='/searcher'>Go to GitHubSearcher</Link>
        <Link to='/films'>Go to GalleriaFilms</Link>
        <Link to='/covid'>Go to Covid</Link>
      </div>
      <div className='profile'>
        <AboutMe />
        <PetProjects />
      </div>
    </>
  );
};
