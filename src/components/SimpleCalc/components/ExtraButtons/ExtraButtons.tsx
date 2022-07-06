import { Buttons } from "../";
import { EXTRA_BUTTONS } from "../../constants/constants";
import { setExtraOperator } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

export const ExtraButtons = () => {
  return (
    <div className='simpleCalc__extraButtons'>
      <Buttons
        buttons={EXTRA_BUTTONS}
        callback={setExtraOperator}
        styles={
          "simpleCalc__buttonsPanel simpleCalc__buttons"
        }
      />
    </div>
  );
};
