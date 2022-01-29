import { OPERATORS } from "../../constants";
interface SelectProps {
  id: string;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  styles: string;
}

const Select = ({
  id,
  state,
  setState,
  styles,
}: SelectProps) => {
  return (
    <>
      <label htmlFor={id}>
        "Please, select the operation:"
      </label>
      <select
        className={styles}
        id={id}
        value={state}
        onChange={(e) => setState(e.currentTarget.value)}
      >
        <option disabled={true} value='0'>
          Math operators
        </option>
        {OPERATORS.map((operator) => (
          <option key={operator} value={operator}>
            {operator}
          </option>
        ))}
      </select>
    </>
  );
};
export default Select;
