import { Link } from "react-router-dom";
import { Back } from "../../../ui";
import { Screen, Buttons } from "./";
import {
  setNumb,
  setOperator,
} from "../../../store/actions/SIMPLE_CALC_ACTIONS";
import {
  BUTTONS,
  OPERATORS,
} from "../../SimpleCalc/constants/constants";
import "./SimpleCalc.scss";

export const SimpleCalc = () => {
  return (
    <>
      <Back />
      <div className='wrap__simpleCalc'>
        <div className='simpleCalc'>
          <Screen />
          <div className='simpleCalc__BlockButtons'>
            <Buttons buttons={BUTTONS} callback={setNumb} />
            <Buttons
              buttons={OPERATORS}
              callback={setOperator}
            />
          </div>
        </div>
      </div>
    </>
  );
};
