import { useDispatch, useSelector } from "react-redux";
import {
  getSideBare,
  getFirstUserDate,
  getSecondUserDate,
} from "../../../../store/selectors/simpleCalcSelector";
import { Buttons } from "../Buttons/Buttons";
import {
  setExtraOperator,
  setUserDate,
  setSideBar,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { EXTRA_BUTTONS } from "../../constants/constants";

export const SidePanel = () => {
  const sideBare = useSelector(getSideBare);
  const firstDate = useSelector(getFirstUserDate);
  const secondDate = useSelector(getSecondUserDate);
  const dispatch = useDispatch();

  return (
    <>
      <div className='simpleCalc__sidePanel'>
        <div className='simpleCalc__calendar'>
          TODO
          {/* <label htmlFor='1st'>1st date</label>
          <input
            type='date'
            name='1st'
            value={firstDate ? firstDate.toString() : ""}
            onChange={(e) => {
              dispatch(setUserDate(e.currentTarget.value));
            }}
          />
          <label htmlFor='2st'>2nd date</label>
          <input
            type='date'
            name='2st'
            value={secondDate ? secondDate.toString() : ""}
            onChange={(e) => {
              dispatch(setUserDate(e.currentTarget.value));
            }}
          /> */}
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
