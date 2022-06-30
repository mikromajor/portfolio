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
    <li className='listItem'>
      <div className='listItem__wrap'>
        {contentIcons ? (
          <img
            src={require(`../../${PATH}${contentIcons}${ICONS_EXT}`)}
            alt='icon'
            className='listItem__icon'
          />
        ) : null}
        {base.find((e) => e === soc) ? (
          <a href={link} className='listItem__link'>
            {soc}
          </a>
        ) : (
          <p className='listItem__content'>{content}</p>
        )}
      </div>
    </li>
  );
};
export default ListItem;
