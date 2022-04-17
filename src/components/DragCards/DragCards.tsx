import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import "./components/Card/Card.scss";
import Card from "./components/Card/Card";
import CardDeck from "./components/CardDeck/CardDeck";
import { getFetch } from "./api/getFetch";
import { UserType } from "./types";
// import {  E, O } from "./types";

export const DragCards: FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [draggingUser, setDraggingUser] =
    useState<UserType>();
  console.log("draggingUser", draggingUser?.name.first);
  console.log("users", users);

  useEffect(() => {
    const getFetchResults = async () => {
      const response = await getFetch();
      const objUsers = await response.json();

      const arrUser = (await objUsers.results.map(
        (r: { another: any }) => {
          r.another = [];
          return r;
        }
      )) as unknown as UserType[];
      setUsers(arrUser);
    };
    getFetchResults();
  }, []);

  return (
    <>
      <Link to='/portfolio'>{"<-- BACK"}</Link>

      <h1 className='header'>Drag and drop</h1>
      <div className='dragCards'>
        {!!users.length &&
          users.map((user, i) => (
            <CardDeck
              length={user.another.length}
              key={user.login.uuid + i + Math.random()}
            >
              <Card
                users={users}
                user={user}
                setUsers={setUsers}
                draggingUser={draggingUser}
                setDraggingUser={setDraggingUser}
                i={i}
              />
            </CardDeck>
          ))}
      </div>
    </>
  );
};
