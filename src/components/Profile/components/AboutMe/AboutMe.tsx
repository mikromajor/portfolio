import { Accordion } from "react-bootstrap";
import { ABOUT_ME } from "../../content";
import { KeysAboutMeType } from "../../types";
import { AccordionItem, Header } from "../../ui";

import "./AboutMe.scss";

const AboutMe = () => {
  const keys = Object.keys(
    ABOUT_ME
  ) as unknown as KeysAboutMeType[];

  return (
    <div className='aboutMe'>
      <Header />
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
