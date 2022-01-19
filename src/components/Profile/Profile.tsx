import { AboutMe } from "../.";
import { PetProjects } from "../PetProjects";
// import {} from "antd";
// import {} from "react-bootstrap/Button";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className='profile'>
      <AboutMe />
      <PetProjects />
    </div>
  );
};
export default Profile;
