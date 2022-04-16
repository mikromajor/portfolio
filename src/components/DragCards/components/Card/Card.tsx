import React, { FC } from "react";
import { UserType, CardProps } from "../../types";
import "./Card.scss";

const Card: FC<CardProps> = ({
  user,
  users,
  i,
  setUsers,
  setDraggingUser,
  draggingUser,
}) => {
  const dragStartHandle = (
    e: React.DragEvent,
    user: UserType,
    i: number
  ): void => {
    console.log("Start", i, ". ", user.name.first);
    setDraggingUser(user);
  };
  const dragEndHandle = (
    e: React.DragEvent,
    user: UserType,
    i: number
  ) => {
    console.log("End", i, ". ", user.name.first);
    e.currentTarget.classList.add("card__red");
  };
  const dragLeaveHandle = (
    e: React.DragEvent,
    user: UserType,
    i: number
  ) => {
    e.preventDefault();
    console.log("Leave", i, ". ", user.name.first);
    e.currentTarget.classList.remove("card__shine");
  };
  const dragOverHandle = (
    e: React.DragEvent,
    user: UserType,
    i: number
  ) => {
    e.preventDefault();
    console.log("Over", i, ". ", user.name.first);
    e.currentTarget.classList.add("card__shine");
  };
  const dropHandle = (
    e: React.DragEvent,
    user: UserType,
    i: number
  ): void => {
    e.preventDefault();
    console.log("Drop", i, ". ", user.name.first);
    console.log(
      "draggingUser in Drop->",
      draggingUser?.name.first
    );

    const newState = users
      .map((prevUser) => {
        if (user.id.value === draggingUser?.id.value) {
          return prevUser;
        }
        if (prevUser.id.value === draggingUser?.id.value) {
          return null;
        }
        if (prevUser.id.value === user.id.value) {
          if (draggingUser) {
            return {
              ...prevUser,
              another: [
                ...prevUser.another,
                ...draggingUser.another,
                draggingUser,
              ],
            };
          }
          setDraggingUser(undefined);
        }
        return prevUser;
      })
      .filter((obj) =>
        obj ? true : false
      ) as unknown as UserType[];
    setUsers(newState);
  };

  return (
    <div
      className='card'
      draggable={true}
      onDragStart={(e) => dragStartHandle(e, user, i)}
      onDragEnd={(e) => dragEndHandle(e, user, i)}
      onDragLeave={(e) => dragLeaveHandle(e, user, i)}
      onDragOver={(e) => dragOverHandle(e, user, i)}
      onDrop={(e) => dropHandle(e, user, i)}
    >
      {/* <img
          src={user.picture.large}
          alt={`${user.name.last}`}
          className='card__img'
        /> */}
      <h4 className='card__title'>{`${i}. ${user.name.first} ${user.name.last}`}</h4>
    </div>
  );
};
export default Card;
