import { useState, useEffect, FC } from "react";
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

  //  // V - smaller
  // const [up, setUp] = useState<O[]>([]);
  // const [arr, setArr] = useState<O[]>([
  //   { name: "first", reducer: [] },
  //   { name: "second", reducer: [] },
  //   { name: "third", reducer: [] },
  //   { name: "fourth", reducer: [] },
  //   { name: "fifth", reducer: [] },
  // ]);
  // console.log("state", arr);

  // const dragStart = (e: E, o: O) => {
  //   console.log("Start", o);
  //   setUp([o]);
  // };
  // const dragEnd = (e: E) => {
  //   console.log("End");
  // };
  // const dragLeave = (e: E) => {
  //   console.log("Leave");
  //   e.currentTarget.classList.remove("card__shine");
  // };
  // const dragOver = (e: E) => {
  //   console.log("Over");
  //   e.preventDefault();
  //   !e.currentTarget.classList.contains("card__shine") &&
  //     e.currentTarget.classList.add("card__shine");
  // };
  // const drop = (e: E, o: O) => {
  //   const newState = arr
  //     .map((old) => {
  //       if (o.name === up[0].name) {
  //         return old;
  //       }
  //       if (old.name === o.name) {
  //         return {
  //           ...old,
  //           reducer: [
  //             ...old.reducer,
  //             ...up[0].reducer,
  //             { ...up[0], reducer: [] },
  //           ],
  //         };
  //       }
  //       if (old.name === up[0].name) {
  //         return null;
  //       }
  //       return old;
  //     })
  //     .filter((o) => (o ? true : false)) as unknown as O[];
  //   setArr(newState);
  //   console.log("Drop newState->");
  // };
  return (
    <>
      <Link to='/portfolio'>{"<-- BACK"}</Link>
      {/* <div className='dragCards'>
        {arr.map((o, i) => (
          <div
            className='card'
            key={o.name}
            draggable={true}
            onDragStart={(e) => dragStart(e, o)}
            onDragEnd={(e) => dragEnd(e)}
            onDragLeave={(e) => dragLeave(e)}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => drop(e, o)}
          >
            {o.name}
          </div>
        ))}
      </div> */}

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
