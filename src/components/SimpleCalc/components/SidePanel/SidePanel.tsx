import { useDispatch, useSelector } from "react-redux";
import { getSideBare } from "../../../../store/selectors/simpleCalcSelector";
import { setSideBar } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { Buttons } from "../Buttons/Buttons";
import { setExtraOperator } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { EXTRA_BUTTONS } from "../../constants/constants";

export const SidePanel = () => {
  const sideBare = useSelector(getSideBare);
  const dispatch = useDispatch();

  return (
    <>
      <div className='simpleCalc__sidePanel'>
        <div className='simpleCalc__calendar'>TODO</div>
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
