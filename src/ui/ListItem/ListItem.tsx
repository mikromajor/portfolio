import { PATH, ICONS_EXT } from "../../constants";
import "./ListIem.scss";

type ListItemProps = {
  content: string;
  contentIcons: string;
};

const ListItem = ({
  content,
  contentIcons,
}: ListItemProps) => {
  return (
    <li className='list_item'>
      <div className='list_item__wrap'>
        {contentIcons && (
          <img
            src={require(`../../${PATH}${contentIcons}${ICONS_EXT}`)}
            alt='icon'
            className='list_item__icon'
          />
        )}
        <p
          className={`list_item__content ${
            !contentIcons ? "margin_left__minus_icon" : ""
          }`}
        >
          {content}
        </p>
      </div>
    </li>
  );
};
export default ListItem;
