import { ALL_OPERATORS } from "../../../../store/constants/simpleCalcConstants";
import { setOperator } from "../../../../store/actions/SIMPLE_CALC_ACTIONS";
import { useDispatch, useSelector } from "react-redux";
import { getStoreSelector } from "../../../../store/selectors/simpleCalcSelector";

const Select = () => {
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
        <option disabled={true} value='0'>
          Math operators
        </option>
        {ALL_OPERATORS.map((operator) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
