import { useDispatch, useSelector } from "react-redux";
import { getSideBare } from "../../../../store/selectors/simpleCalcSelector";
import { DateBlock, ExtraButtons } from "../";
import { setSideBar } from "../../../../store/ACTIONS/SIMPLE_CALC_ACTIONS";

export const SidePanel = () => {
  const sideBare = useSelector(getSideBare);
  const dispatch = useDispatch();

  return (
    <>
      <div className='simpleCalc__sidePanel'>
        <DateBlock />
        <ExtraButtons />
      </div>
      <button
        className='simpleCalc__openCloseButton'
        onClick={() => dispatch(setSideBar())}
      >
        {sideBare ? "<" : ">"}
      </button>
    </>
  );
};
