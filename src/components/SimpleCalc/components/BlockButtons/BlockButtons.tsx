import { Buttons } from "../.";
import {
  setNumb,
  setOperator,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import {
  BUTTONS,
  OPERATORS,
} from "../../../SimpleCalc/constants/constants";

export const BlockButtons = () => {
  return (
    <>
      <div className='simpleCalc__BlockButtons'>
        <Buttons buttons={BUTTONS} callback={setNumb} />
        <Buttons
          buttons={OPERATORS}
          callback={setOperator}
        />
      </div>
    </>
  );
};
