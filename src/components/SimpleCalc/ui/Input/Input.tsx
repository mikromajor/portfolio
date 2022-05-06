import { useDispatch } from "react-redux";
import { setX } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

interface InputPropsType {
  labelText: string;
  id: string;
  val: string;
  setVal: typeof setX;
}

export const Input = ({
  labelText,
  id,
  val,
  setVal,
}: InputPropsType) => {
  const dispatch = useDispatch();

  return (
    <div className='simpleCalc__input'>
      <label htmlFor={id}>{labelText}</label>
      <input
        step={"any"}
        id={id}
        type={"number"}
        value={val}
        onChange={(e) => {
          const value = e.currentTarget.value;
          value && dispatch(setVal(value));
        }}
      ></input>
    </div>
  );
};
