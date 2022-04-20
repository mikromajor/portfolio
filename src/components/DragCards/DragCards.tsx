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
import {
  fetchUsers,
  fetchMan,
  fetchWomen,
} from "./store/reducers/userReducer";

export const DragCards: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);
  console.log("users in DragCards =>", users);

  // const error = useSelector(getErrorSelector);
  // const loader = useSelector(getLoaderSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Link to='/portfolio'>{"<-- BACK"}</Link>

      <h1 className='header'>Drag and drop.</h1>
      <h2 className='header'>
        Put in or pull out of the cards deck.
      </h2>
      <div className='buttonsRow'>
        <button
          className='newUsersButton'
          onClick={() => dispatch(fetchUsers())}
        >
          Get new users
        </button>
        <button
          className='newUsersButton'
          onClick={() => dispatch(fetchMan())}
        >
          Get only mans
        </button>
        <button
          className='newUsersButton'
          onClick={() => dispatch(fetchWomen("20"))}
        >
          Get only women
        </button>
      </div>

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
