import { Accordion } from "react-bootstrap";
import { PrimaryInf, SecondaryInf } from "..";
import {
  KeysAboutMe,
  KeysPetProject,
  ValueAboutMe,
  ValuePetProject,
} from "../../types";
import { requireImg } from "../../handlers";
import "./accordionItem.scss";

type AccordionItemProps = {
  eventKey: number;
  showLink: boolean;
  header: KeysAboutMe | KeysPetProject;
  body: ValueAboutMe | ValuePetProject;
};

const AccordionItem = ({
  eventKey,
  showLink,
  header,
  body,
}: AccordionItemProps) => {
  let icon = requireImg(header);
  return (
    <Accordion.Item eventKey={`${eventKey}`}>
      <Accordion.Header className='accordion__header'>
        <PrimaryInf icon={icon} header={header} />
      </Accordion.Header>
      <Accordion.Body>
        <SecondaryInf
          body={body}
          showLink={showLink}
          header={header}
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default AccordionItem;
