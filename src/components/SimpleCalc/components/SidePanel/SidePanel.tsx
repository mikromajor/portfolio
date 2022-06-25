import { useDispatch, useSelector } from "react-redux";
import { getSideBare } from "../../../../store/selectors/simpleCalcSelector";
import { setSideBar } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

export const SidePanel = () => {
  const sideBare = useSelector(getSideBare);
  const dispatch = useDispatch();

  return (
    <>
      <div className='simpleCalc__sidePanel'>
        <div className='simpleCalc__calendar'></div>
        <div className='simpleCalc__extraButtons'></div>
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
