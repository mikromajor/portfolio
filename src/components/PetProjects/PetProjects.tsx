import { PET_PROJECTS } from "../../content/content";
import { Accordion } from "react-bootstrap";
import { AccordionItem } from "../../ui";
import { IconsAndContentType } from "../../types";
import "./PetProjects.scss";

const PetProjects = () => {
  const contentKeys: Array<string> = [];
  const contentValues: Array<IconsAndContentType> = [];

  for (const [key, value] of Object.entries(PET_PROJECTS)) {
    contentKeys.push(key);
    contentValues.push(value);
  }

  console.log("contentKeys", contentKeys);
  console.log("contentValues", contentValues);

  return (
    <section className='pet_projects'>
      <h2 className='pet_projects__title'>
        My pet projects
      </h2>
      <Accordion
        defaultActiveKey={["0", "1", "2"]}
        alwaysOpen
        className='accordion'
        flush={true}
      >
        {contentKeys.map((keyPet, i) => (
          <AccordionItem
            key={keyPet + i}
            eventKey={i}
            header={keyPet}
            body={contentValues[i]}
          />
        ))}
      </Accordion>
    </section>
  );
};
export default PetProjects;
