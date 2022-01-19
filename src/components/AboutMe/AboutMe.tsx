import { Accordion } from "react-bootstrap";
import { ABOUT_ME } from "../../content/content";
import { AccordionItem } from "../../ui";
import { IconsAndContentType } from "../../types";

import "./AboutMe.scss";

const AboutMe = () => {
  const contentKeys: Array<string> = [];
  const contentValues: Array<IconsAndContentType> = [];

  for (const [key, value] of Object.entries(ABOUT_ME)) {
    contentKeys.push(key);
    contentValues.push(value);
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
        className='accordion'
        flush={true}
      >
        {contentKeys.map((key, i) => (
          <AccordionItem
            key={key + i}
            eventKey={i}
            header={key}
            body={contentValues[i]}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default AboutMe;
