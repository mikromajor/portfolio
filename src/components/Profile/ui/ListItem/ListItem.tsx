import { PATH, ICONS_EXT } from "../../constants";
import "./ListIem.scss";

type ListItemProps = {
  content: string;
  contentIcons: string | null;
};

const ListItem = ({
  content,
  contentIcons,
}: ListItemProps) => {
  const [soc, link] = content.split(" ");
  const base = ["Telegram:", "Linkedin:", "GitHub:"];
  return (
    <li className='list_item'>
      <div className='list_item__wrap'>
        {contentIcons ? (
          <img
            src={require(`../../${PATH}${contentIcons}${ICONS_EXT}`)}
            alt='icon'
            className='list_item__icon'
          />
        ) : null}
        {base.find((e) => e === soc) ? (
          <a href={link} className='list_item__link'>
            {soc}
          </a>
        ) : (
          <p className='list_item__content'>{content}</p>
        )}
      </div>
    </li>
  );
};
export default ListItem;
