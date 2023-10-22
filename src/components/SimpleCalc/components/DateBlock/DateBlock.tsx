import { useDispatch, useSelector } from "react-redux";
import {
  getFirstDate,
  getSecondDate,
} from "../../../../store/selectors/simpleCalcSelector";
import {
  setDate1,
  setDate2,
  calcDate,
} from "../../../../store/ACTIONS/SIMPLE_CALC_ACTIONS";

export const DateBlock = () => {
  const firstDate = useSelector(getFirstDate);
  const secondDate = useSelector(getSecondDate);
  const dispatch = useDispatch();

  return (
    <div className='simpleCalc__dateBlock'>
      <button
        className='simpleCalc__calculateDateBtn'
        onClick={() =>
          dispatch(calcDate(firstDate, secondDate))
        }
      >
        Difference in days
      </button>
      <input
        type='date'
        value={firstDate}
        onChange={(e) => {
          dispatch(setDate1(e.currentTarget.value));
        }}
      />
      <input
        type='date'
        value={secondDate}
        onChange={(e) => {
          dispatch(setDate2(e.currentTarget.value));
        }}
      />
    </div>
  );
};
