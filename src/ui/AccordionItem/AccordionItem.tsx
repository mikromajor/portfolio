import { Accordion } from "react-bootstrap";
import { ListItem } from "..";
import { ICONS_AND_CONTENT } from "../../types";
import { PATH, ICONS_EXT } from "../../constants";

import "./AccordionItem.scss";

type AccordionItemProps = {
  eventKey: number;
  header: string;
  body: ICONS_AND_CONTENT;
};

const AccordionItem = ({
  eventKey,
  header,
  body,
}: AccordionItemProps) => {
  const { ICON, CONTENT_ICONS, CONTENT } = body;
  const [titleIcon] = ICON;

  return (
    <Accordion.Item
      eventKey={`${eventKey}`}
      className='accordionItem'
    >
      <Accordion.Header className='accordionItem__header'>
        {titleIcon ? (
          <img
            src={require(`../../${PATH}${titleIcon}${ICONS_EXT}`)}
            alt='title icons'
            className='accordionItem__title__icon'
          />
        ) : null}
        <em
          className={`accordionItem__title__content ${
            !titleIcon
              ? "margin_left__minus_title_icon"
              : ""
          }`}
        >
          {header}
        </em>
      </Accordion.Header>
      <Accordion.Body>
        <ul className='accordionBody__ul'>
          {CONTENT.map((content, i) => (
            <ListItem
              content={content}
              contentIcons={CONTENT_ICONS[i]}
              key={content + i}
            />
          ))}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default AccordionItem;
