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
        onClick={() => dispatch(fetchWomen("40"))}
      >
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
