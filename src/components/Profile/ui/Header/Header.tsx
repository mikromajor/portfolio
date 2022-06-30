import { useState } from "react";

export const Header = () => {
  const [changeAvatar, setChangeAvatar] = useState(false);

  return (
    <header className='aboutMe__header'>
      <img
        src={require("../../img/avatar.png")}
        alt='avatar'
        className={`aboutMe__avatar ${
          changeAvatar ? "avatar__click" : ""
        }`}
        onClick={() => {
          setChangeAvatar((prevState) => !prevState);
        }}
      />
      <div className='aboutMe__wrap'>
        <div className='aboutMe__title'>
          <h1 className='aboutMe__name'>
            Alexandr Solianyk
          </h1>
          <em className='aboutMe__profession'>
            Junior front-end developer
          </em>
          <p>Homeland - Ukraine</p>
          <p> Residence - Poland</p>
        </div>
      </div>
    </header>
  );
};
