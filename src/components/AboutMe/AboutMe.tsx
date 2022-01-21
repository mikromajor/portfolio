import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { ABOUT_ME } from "../../content";
import { KeysAboutMeType } from "../../types";
import { AccordionItem } from "../../ui";

import "./AboutMe.scss";

const AboutMe = () => {
  const [changeAvatar, useChangeAvatar] = useState(false);

  const useHandleChangeAvatar = (): void => {
    useChangeAvatar((prevState) => !prevState);
  };
  const keys = Object.keys(
    ABOUT_ME
  ) as unknown as KeysAboutMeType[];

  return (
    <div className='about_me'>
      <header className='about_me__header'>
        <img
          src={require("../../img/avatar.png")}
          alt='avatar'
          className={`about_me__avatar ${
            changeAvatar ? "avatar__click" : ""
          }`}
          onClick={useHandleChangeAvatar}
        />
        <div className='about_me__wrap'>
          <div className='about_me__title'>
            <h1 className='about_me__name'>
              Alexandr Solianyk
            </h1>
            <em className='about_me__profession'>
              Junior front-end developer
            </em>
            <p>Kiev, Ukraine – homeland</p>
            <p>
              Poland - have a <b>valid residence card.</b>
            </p>
          </div>
        </div>
      </header>
      <Accordion
        defaultActiveKey={["1"]}
        alwaysOpen
        className='accordion'
        flush={true}
      >
        {keys.map((key, i) => (
          <AccordionItem
            key={key + i}
            eventKey={i}
            header={key}
            body={ABOUT_ME[key]}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default AboutMe;
