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
  const dragStartHandle = (user: UserType): void => {
    console.log("Start", user.name.first);
    setDraggingUser(user);
  };
  const dragEndHandle = (user: UserType) => {
    console.log("End", user.name.first);

    if (draggingUser?.another.length) {
      const anotherLast =
        draggingUser.another[
          draggingUser.another.length - 1
        ];
      const lastUser = {
        ...anotherLast,
        another: draggingUser.another.filter(
          (o) => o.login.uuid !== anotherLast.login.uuid
        ),
      };
      console.log("lastUser", lastUser);

      //cleaning oldest user who hold arr-stor
      const onlyOldUsers = users.map((oldUser) => {
        if (
          oldUser.login.uuid === draggingUser.login.uuid
        ) {
          return { ...draggingUser, another: [] };
        }
        return oldUser;
      });
      console.log("onlyOldUsers", onlyOldUsers);
      setUsers([...onlyOldUsers, lastUser]);
    }
  };
  const dragLeaveHandle = (
    e: React.DragEvent,
    user: UserType
  ) => {
    e.preventDefault();
    console.log("Leave", user.name.first);
    e.currentTarget.classList.remove("card__shine");
  };
  const dragOverHandle = (
    e: React.DragEvent,
    user: UserType
  ) => {
    e.preventDefault();
    console.log("Over", user.name.first);
    e.currentTarget.classList.add("card__shine");
  };
  const dropHandle = (
    e: React.DragEvent,
    dropUser: UserType
  ): void => {
    e.preventDefault();
    console.log("Drop", dropUser.name.first);
    const newState = users
      .map((prevUser) => {
        if (
          dropUser.login.uuid === draggingUser?.login.uuid
        ) {
          return prevUser;
        }
        if (
          prevUser.login.uuid === draggingUser?.login.uuid
        ) {
          return null;
        }
        if (prevUser.login.uuid === dropUser.login.uuid) {
          if (draggingUser) {
            return {
              ...prevUser,
              another: [
                ...prevUser.another,
                ...draggingUser.another,
                { ...draggingUser, another: [] },
              ],
            };
          }
        }
        return prevUser;
      })
      .filter((obj) =>
        obj ? true : false
      ) as unknown as UserType[];
    setUsers(newState);
  };

  return (
    <div className='wrap'>
      <div
        className='card'
        draggable={true}
        onDragStart={() => dragStartHandle(user)}
        onDragEnd={() => dragEndHandle(user)}
        onDragLeave={(e) => dragLeaveHandle(e, user)}
        onDragOver={(e) => dragOverHandle(e, user)}
        onDrop={(e) => dropHandle(e, user)}
      >
        <img
          src={user.picture.large}
          alt={`${user.name.last}`}
          className='card__img'
        />
        <h4 className='card__title'>{`${i}. ${user.name.first} ${user.name.last}`}</h4>
      </div>
    </div>
  );
};
export default Card;
