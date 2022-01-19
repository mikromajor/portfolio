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
        <p className='list_item__content'>{content}</p>
      </div>
    </li>
  );
};
export default ListItem;
