import { FC } from "react";
import { UserType } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDruggingUser } from "../../store/reducers/draggingUserReducer";
import {
  combineUsers,
  separateUsers,
} from "../../store/reducers/userReducer";
import {
  getFlipThroughSelector,
  getCurrentDraggingUserSelector,
} from "../../store/selectors";
import {
  startFlipThrough,
  stopFlipThrough,
} from "../../store/reducers/flipThroughReducer";
import {
  removeShine,
  addShine,
} from "./utils/changeCarStyles";
import "./Card.scss";

interface CardProps {
  user: UserType;
}

export const Card: FC<CardProps> = ({ user }) => {
  const { currentDraggingUser } = useSelector(
    getCurrentDraggingUserSelector
  );
  const { showImg, userId } = useSelector(
    getFlipThroughSelector
  );

  const dispatch = useDispatch();

  //TODO: add it to reducer
  let changeGenderColor = true; //it will be change by button
  const cardGenderStylesHandle = (): string =>
    changeGenderColor
      ? `card card__${user.gender}`
      : "card";

  return (
    <div className='wrap'>
      <div
        className={cardGenderStylesHandle()}
        draggable={true}
        onDragStart={() =>
          dispatch(setCurrentDruggingUser(user))
        }
        onDragEnd={() =>
          currentDraggingUser &&
          dispatch(separateUsers(currentDraggingUser))
        }
        onDragLeave={(e) => removeShine(e)}
        onDragOver={(e) => addShine(e)}
        onDrop={(e) =>
          dispatch(combineUsers(currentDraggingUser, user))
        }
      >
        <img
          onMouseOver={() =>
            dispatch(startFlipThrough(user))
          }
          onMouseLeave={() => dispatch(stopFlipThrough())}
          src={
            showImg && user.id === userId
              ? showImg
              : user.picture.large
          }
          alt={`${user.name.last}`}
          className='card__img'
        />
        <h4 className='card__title'>{`${user.name.first} ${user.name.last}`}</h4>
      </div>
    </div>
  );
};
