import { FC } from "react";
import { useDispatch } from "react-redux";
import { addToNumber } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

interface PropsType {
  name: string;
  i: number;
}

export const Button: FC<PropsType> = ({ name, i }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(addToNumber(name))}
      className='simpleCalc__button'
    >
      {name}
    </div>
  );
};
