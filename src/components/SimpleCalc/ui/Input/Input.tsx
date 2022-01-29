import "./Input.scss";

interface InputProps {
  labelText: string;
  id: string;
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
  styles: string;
}
const Input = ({
  labelText,
  id,
  state,
  setState,
  styles,
}: InputProps) => {
  return (
    <div className={styles}>
      <label htmlFor={id}>{labelText}</label>
      <input
        className='input'
        step={"any"}
        id={id}
        type={"number"}
        value={state}
        onChange={(e) => {
          setState(Number(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};
export default Input;
