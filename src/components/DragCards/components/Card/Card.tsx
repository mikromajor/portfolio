import { FC } from "react";
import { UserType } from "../../../../store/types/dragCardsType";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDruggingUser } from "../../../../store/reducer/dragCardsReducer/draggingUserReducer";

import {
  combineUsers,
  separateUsers,
} from "../../../../store/reducer/dragCardsReducer/userReducer";
import {
  getFlipThroughSelector,
  getCurrentDraggingUserSelector,
} from "../../../../store/selectors/dragCardsSelectors";
import {
  startFlipThrough,
  stopFlipThrough,
} from "../../../../store/reducer/dragCardsReducer/flipThroughReducer";
import {
  removeShine,
  addShine,
} from "./utils/changeCardStyles";

interface CardProps {
  user: UserType;
}

export const Card: FC<CardProps> = ({ user }) => {
  const { currentDraggingUser } = useSelector(
    getCurrentDraggingUserSelector
  );
  const { liningUser, idUser } = useSelector(
    getFlipThroughSelector
  );
  const { name, gender, picture } =
    liningUser && idUser === user.id ? liningUser : user;

  const dispatch = useDispatch();

  return (
    <div className='drug-cards__card-cover'>
      <div
        className={`drug-cards__card drug-cards__card--${gender}`}
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
          src={picture.large}
          alt={`${name.last}`}
          className='drug-cards__user-img'
        />
        <h4 className='drug-cards__user-name'>{`${name.first} ${name.last}`}</h4>
      </div>
    </div>
  );
};
