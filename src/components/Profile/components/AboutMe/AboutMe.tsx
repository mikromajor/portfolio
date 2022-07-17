import { FC } from "react";
import { Accordion } from "react-bootstrap";
import { ABOUT_ME } from "../../content";
import { KeysAboutMe } from "../../types";
import { AccordionItem, Header } from "../../ui";

import "./AboutMe.scss";

const AboutMe: FC = () => {
  const keys = Object.keys(
    ABOUT_ME
  ) as unknown as KeysAboutMe[];

  return (
    <div className='aboutMe'>
      <Header />
      <Accordion
        defaultActiveKey={["1"]}
        alwaysOpen
        flush={true}
      >
        {keys.map((key, i) => (
          <AccordionItem
            key={key + i}
            eventKey={i}
            showLink={false}
            header={key}
            body={ABOUT_ME[key]}
          />
        ))}
      </Accordion>
    </div>
  );
};
export default AboutMe;
