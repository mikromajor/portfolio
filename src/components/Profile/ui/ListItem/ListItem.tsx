import { FC } from "react";
import { SOC_SIGNS } from "../../constants";
import { requireImg } from "../../handlers";
import "./ListIem.scss";

type ListItemProps = {
  content: string;
  contentHeader: string;
};

const ListItem: FC<ListItemProps> = ({
  content,
  contentHeader,
}) => {
  const [socName, link] = content.split(" ");
  const icon = requireImg(contentHeader);
  const isFullLink = SOC_SIGNS.find(
    (el) => el === contentHeader
  );
  return (
    <li className='listItem'>
      <div className='listItem__wrap'>
        {!!icon && (
          <img
            src={icon}
            alt={contentHeader}
            className='listItem__icon'
          />
        )}

        {!!isFullLink ? (
          <a href={link} className='listItem__link'>
            {socName}
          </a>
        ) : (
          <div className='listItem__content'>{content}</div>
        )}
      </div>
    </li>
  );
};
export default ListItem;
