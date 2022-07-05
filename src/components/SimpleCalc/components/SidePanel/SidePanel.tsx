import { useDispatch, useSelector } from "react-redux";
import {
  getSideBare,
  getFirstDate,
  getSecondDate,
} from "../../../../store/selectors/simpleCalcSelector";
import { Buttons } from "../Buttons/Buttons";
import {
  setExtraOperator,
  setDate1,
  setDate2,
  calcDate,
  setSideBar,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { EXTRA_BUTTONS } from "../../constants/constants";

export const SidePanel = () => {
  const sideBare = useSelector(getSideBare);
  const firstDate = useSelector(getFirstDate);
  const secondDate = useSelector(getSecondDate);
  const dispatch = useDispatch();

  return (
    <>
      <div className='simpleCalc__sidePanel'>
        <div className='simpleCalc__calendar'>
          <button
            className='simpleCalc__calcBtn'
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
        <div className='simpleCalc__extraButtons'>
          <Buttons
            buttons={EXTRA_BUTTONS}
            callback={setExtraOperator}
          />
        </div>
      </div>
      <div
        className='simpleCalc__openCloseButton'
        onClick={() => dispatch(setSideBar())}
      >
        {sideBare ? "<" : ">"}
      </div>
    </>
  );
};
