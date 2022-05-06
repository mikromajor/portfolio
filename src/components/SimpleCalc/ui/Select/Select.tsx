import { ALL_OPERATORS } from "../../constants/constants";
import { setOperator } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { useDispatch, useSelector } from "react-redux";
import { getStoreSelector } from "../../../../store/selectors/simpleCalcSelector";

export const Select = () => {
  const dispatch = useDispatch();
  const { operator } = useSelector(getStoreSelector);
  return (
    <>
      <label htmlFor={"simpleCalc_selector"}>
        "Please, select the operation:"
      </label>
      <select
        className='simpleCalc__selector'
        id={"simpleCalc_selector"}
        value={operator}
        onChange={(e) =>
          dispatch(setOperator(e.currentTarget.value))
        }
      >
        {/* <option disabled={false} value='Operation'>
          Operation
        </option> */}
        {ALL_OPERATORS.map((operator, i) => (
          <option key={operator + i} value={operator}>
            {operator}
          </option>
        ))}
      </select>
    </>
  );
};
