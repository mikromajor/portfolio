import { Accordion } from "react-bootstrap";
import { Ul } from "..";
import {
  KeysAboutMe,
  KeysPetProject,
  ValueAboutMe,
  ValuePetProject,
} from "../../types";
import { PetLink } from "../.";
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
  const headerContent = header.toUpperCase();
  const bodyKeys: string[] = [];
  const bodyValues: string[] = [];

  const hasNestedObj = typeof body === "object";
  if (hasNestedObj) {
    for (const [key, val] of Object.entries(body)) {
      bodyKeys.push(key);
      bodyValues.push(val);
    }
  }
  const child = hasNestedObj ? (
    <Ul bodyKeys={bodyKeys} bodyValues={bodyValues} />
  ) : (
    <>
      <div className='accordion__body'>{body}</div>
      {showLink && <PetLink header={header} />}
    </>
  );
  let icon = requireImg(header);
  return (
    <Accordion.Item eventKey={`${eventKey}`}>
      <Accordion.Header className='accordion__header'>
        {!!icon && (
          <img
            src={icon}
            alt={header}
            className='accordion__icon'
          />
        )}

        <h3 className='accordion__content'>
          {headerContent}
        </h3>
      </Accordion.Header>
      <Accordion.Body>{child}</Accordion.Body>
    </Accordion.Item>
  );
};
export default AccordionItem;
