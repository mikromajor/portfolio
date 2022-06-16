import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  setNumbType,
  setOperatorType,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

interface PropsType {
  btnName: string;
  callback: setNumbType | setOperatorType;
}

export const Button: FC<PropsType> = ({
  btnName,
  callback,
}) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(callback(btnName))}
      className='simpleCalc__button'
    >
      {btnName}
    </div>
  );
};
