import { Accordion } from "react-bootstrap";
import { ListItem } from "..";
import { IconsAndContentType } from "../../types";
import { PATH, ICONS_EXT } from "../../constants";

import "./AccordionItem.scss";

type AccordionItemProps = {
  eventKey: number;
  header: string;
  body: IconsAndContentType;
};

const AccordionItem = ({
  eventKey,
  header,
  body,
}: AccordionItemProps) => {
  const { ICON, CONTENT_ICONS, CONTENT, LINK } = body;
  const [titleIcon] = ICON;

  return (
    <Accordion.Item eventKey={`${eventKey}`}>
      <Accordion.Header className='accordionItem__header'>
        {titleIcon ? (
          <img
            src={require(`../../${PATH}${titleIcon}${ICONS_EXT}`)}
            alt='title icons'
            className='accordionItem__title__icon'
          />
        ) : null}
        <h3 className='accordionItem__title__content'>
          {header}
        </h3>
      </Accordion.Header>
      <Accordion.Body>
        <ul className='accordionBody__ul'>
          {CONTENT.map((content, i) => (
            <ListItem
              content={content}
              contentIcons={
                CONTENT_ICONS ? CONTENT_ICONS[i] : null
              }
              key={content + i}
            />
          ))}

          {LINK ? (
            <a
              href={LINK[0]}
              className='accordionBody__link'
            >
              Click to demo
            </a>
          ) : null}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default AccordionItem;
