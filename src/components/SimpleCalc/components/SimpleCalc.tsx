import { Input, Select, Results, Warning } from "../ui";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStoreSelector } from "../../../store/selectors/simpleCalcSelector";
import {
  setX,
  setY,
  calculate,
} from "../../../store/actions/SIMPLE_CALC_ACTIONS";
import Buttons from "./Buttons/Buttons";

import "./SimpleCalc.scss";

export const SimpleCalc = () => {
  const dispatch = useDispatch();
  const { x, y, result, error } = useSelector(
    getStoreSelector
  );
  return (
    <>
      <Link to='/portfolio'>{"BACK"}</Link>
      <div className='wrap'>
        <div className='simpleCalc'>
          <div
            className='simpleCalc__monitor'
            style={
              error || result !== ""
                ? { visibility: "visible" }
                : { visibility: "hidden" }
            }
          >
            {error ? (
              <Warning message={error} styles={"warning"} />
            ) : (
              <Results result={result} styles={"results"} />
            )}
          </div>
          <Select />

          <form
            className={"simpleCalc__form"}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(calculate());
            }}
          >
            <Input
              labelText={"Input first number"}
              id={"input_1"}
              val={x}
              setVal={setX}
            />
            <Input
              labelText={"Input second number"}
              id={"input_2"}
              val={y}
              setVal={setY}
            />
            <input
              type={"submit"}
              value={"Calculate"}
              className={
                "simpleCalc__button simpleCalc__button-calculate"
              }
            />
          </form>
          <Buttons />
        </div>
      </div>
    </>
  );
};
