import { useEffect, useState } from "react";

const Input = ({ label, memoCallback }) => {
  const [val, setVal] = useState("");
  console.log("val in Input ->", val);

  useEffect(() => {
    memoCallback(val, label);
  }, [memoCallback, val, label]);
  return (
    <input
      id={label}
      value={val}
      type='date'
      onChange={(e) => {
        setVal(e.currentTarget.value);
      }}
    />
  );
};
export default Input;
