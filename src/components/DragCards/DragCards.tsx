import React, { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Card,
  CardDeck,
  NavBar,
  // MyGoogleMap,
} from "./components";
import { DragCardsHeader } from "./ui";
import "./components/Card/Card.scss";

import {
  getUsersSelector,
  //getErrorSelector,
  // getLoaderSelector,
} from "../store/selectors/dragCardsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/reducer/dragCardsReducer/userReducer";

export const DragCards: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  // const error = useSelector(getErrorSelector);
  // const loader = useSelector(getLoaderSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Link to='/portfolio'>
        <Button
          variant={"secondary"}
          style={{
            boxShadow: "10px 10px 10px rgb(100, 100, 100)",
          }}
        >
          Back
        </Button>
      </Link>
      <DragCardsHeader />
      <NavBar />
      <div className='dragCards'>
        {!!users?.length &&
          users.map((user) => (
            <CardDeck
              length={user.another.length}
              key={user.login.uuid + Math.random()}
            >
              <Card user={user} />
            </CardDeck>
          ))}
      </div>
      {/* <MyGoogleMap /> */}
    </>
  );
};
