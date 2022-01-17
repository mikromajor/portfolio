//import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { ABOUT_ME } from "../../content";
import { ICONS_AND_CONTENT } from "../../types";
import { AccordionItem } from "../../ui";

import "./AboutMe.scss";

const AboutMe = () => {
  const keysAboutMe: string[] = [];
  const valueAboutMe: ICONS_AND_CONTENT[] = [];
  for (const [key, value] of Object.entries(ABOUT_ME)) {
    keysAboutMe.push(key);
    valueAboutMe.push(value);
  }
  return (
    <div className='about_me'>
      <header className='about_me__header'>
        <img
          src={require("../../img/avatar.png")}
          alt='avatar'
          className='about_me__avatar'
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
        className='about_me__accordion'
        flush={true}
      >
        {keysAboutMe.map((keyAboutMe, i) => (
          <AccordionItem
            key={keyAboutMe + i}
            eventKey={i}
            header={keyAboutMe}
            body={valueAboutMe[i]}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default AboutMe;
