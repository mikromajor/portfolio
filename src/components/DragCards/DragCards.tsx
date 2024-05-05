import { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Card,
  CardDeck,
  NavBar,
  DragCardsHeader,
  // MyGoogleMap,
} from "./components";

import {
  getUsersSelector,
  //getErrorSelector,
  // getLoaderSelector,
} from "../../store/selectors/dragCardsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/reducer/dragCardsReducer/userReducer";

export const DragCards: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsersSelector);

  // const error = useSelector(getErrorSelector);
  // const loader = useSelector(getLoaderSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='drug-cards'>
      <Link to='/portfolio'>
        <Button
          variant={"secondary"}
          className='drug-cards__back-button'
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
    </div>
  );
};
