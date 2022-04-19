import React, { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import Card from "./components/Card/Card";
import CardDeck from "./components/CardDeck/CardDeck";
import "./components/Card/Card.scss";

import {
  //getErrorSelector,
  getUsersSelector,
  // getLoaderSelector,
} from "./store/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/reducers/userReducer";

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
      <Link to='/portfolio'>{"<-- BACK"}</Link>

      <h1 className='header'>Drag and drop</h1>
      <button
        className='newUsersButton'
        onClick={() => dispatch(fetchUsers())}
      >
        Get new users
      </button>
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
    </>
  );
};
