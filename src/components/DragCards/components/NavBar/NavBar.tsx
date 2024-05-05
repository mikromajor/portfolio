import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  fetchUsers,
  fetchMan,
  fetchWomen,
} from "../../../../store/reducer/dragCardsReducer/userReducer";

export const NavBar: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='drug-cards__nav-bar'>
      <button onClick={() => dispatch(fetchUsers())}>
        Get new users
      </button>
      <button onClick={() => dispatch(fetchMan())}>
        Get only men
      </button>
      <button onClick={() => dispatch(fetchWomen("40"))}>
        Get only women
      </button>

      {/* <button                 
      className='newUsersButton'
      onClick={() => dispatch(changeGenderColor())}  TODO: create new reducer
    >
     Add gender color
    </button> */}
    </div>
  );
};
