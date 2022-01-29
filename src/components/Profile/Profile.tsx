import { AboutMe, PetProjects } from "./components";
import { Link } from "react-router-dom";

import "./Profile.scss";

const Profile = ({ mes }: { mes: string }) => {
  return (
    <>
      {/* <div>{mes}</div> */}
      <div className='profile'>
        {/* <Link to='/calc'>Go to calculator</Link>
        <Link to='/searcher'>Go to GitHubSearcher</Link> */}
        <AboutMe />
        <PetProjects />
      </div>
    </>
  );
};
export default Profile;
