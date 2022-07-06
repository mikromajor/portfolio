import { Buttons } from "..";
import {
  setNumb,
  setOperator,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import {
  BUTTONS,
  OPERATORS,
} from "../../constants/constants";

export const ButtonsPanel = () => {
  return (
    <div className='simpleCalc__buttonsPanel'>
      <Buttons
        buttons={BUTTONS}
        callback={setNumb}
        styles={
          "simpleCalc__buttonsPanel simpleCalc__buttons"
        }
      />
      <Buttons
        buttons={OPERATORS}
        callback={setOperator}
        styles={
          "simpleCalc__buttonsPanel simpleCalc__buttons"
        }
      />
    </div>
  );
};
