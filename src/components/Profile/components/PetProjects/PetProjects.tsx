import { FC } from "react";
import { PET_PROJECTS } from "../../content";
import { Accordion } from "react-bootstrap";
import { AccordionItem } from "../../ui";
import { KeysPetProject } from "../../types";
import "./PetProjects.scss";

const PetProjects: FC = () => {
  const keys = Object.keys(
    PET_PROJECTS
  ) as unknown as KeysPetProject[];
  return (
    <section className='pet_projects'>
      <h2 className='pet_projects__title'>
        My pet projects
      </h2>
      <Accordion
        defaultActiveKey={["0", "1", "2"]}
        alwaysOpen
        flush={true}
      >
        {keys.map((key, i) => (
          <AccordionItem
            key={key + i}
            eventKey={i}
            showLink={true}
            header={key}
            body={PET_PROJECTS[key]}
          />
        ))}
      </Accordion>
    </section>
  );
};
export default PetProjects;
