import React, { FC } from "react";
import { UserType } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDruggingUser } from "../../store/reducers/draggingUserReducer";
// import {
//   combineUsers,
//   separateUsers,
// } from "../../store/reducers/userReducer";
// import { getCurrentDraggingUserSelector } from "../../store/selectors";
import "./Card.scss";

interface CardProps {
  user: UserType;
}

const Card: FC<CardProps> = ({ user }) => {
  // const currentDraggingUser = useSelector(
  //   getCurrentDraggingUserSelector
  // );
  // const dispatch = useDispatch();

  // const removeShine = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   e.currentTarget.classList.remove("card__shine");
  // };
  // const addShine = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   e.currentTarget.classList.add("card__shine");
  // };

  return (
    <div className='wrap'>
      <div
        className='card'
        // draggable={true}
        // onDragStart={() =>
        //   dispatch(setCurrentDruggingUser(user))
        // }
        // onDragEnd={() =>
        //   dispatch(separateUsers(currentDraggingUser))
        // }
        // onDragLeave={(e) => removeShine(e)}
        // onDragOver={(e) => addShine(e)}
        // onDrop={(e) =>
        //   dispatch(combineUsers(currentDraggingUser, user))
        // }
      >
        <img
          src={user.picture.large}
          alt={`${user.name.last}`}
          className='card__img'
        />
        <h4 className='card__title'>{`${user.name.first} ${user.name.last}`}</h4>
      </div>
    </div>
  );
};
export default Card;
