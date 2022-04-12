import React, { useState } from "react";
import { Input, Select, Results, Warning } from "../ui";
import { Link } from "react-router-dom";

import "./SimpleCalc.scss";

export const SimpleCalc = () => {
  const [input_1, setInput_1] = useState(0);
  const [input_2, setInput_2] = useState(0);
  const [selectedOperator, setSelectedOperator] =
    useState("0");
  const [result, setResult] = useState<number | null>(null);
  const [warning, setWarning] = useState("");

  console.log(
    "Check states",
    selectedOperator,
    input_1,
    input_2,
    result,
    warning
  );

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    calculate();
  };

  const calculate = () => {
    setWarning("");
    switch (selectedOperator) {
      case "0":
        setWarning("You forgot select the operation");
        break;
      case "+":
        setResult(Math.round(input_1 + input_2));
        break;
      case "-":
        setResult(Math.round(input_1 - input_2));
        break;
      case "*":
        setResult(Math.round(input_1 * input_2));
        break;
      case "/":
        if (input_2 !== 0) {
          setResult(Math.round(input_1 / input_2));
        } else {
          setWarning("Cannot be divided by zero.");
        }
        break;
      default:
        setWarning("Error");
    }
  };

  return (
    <>
      <Link to='/portfolio'>{"<-- BACK"}</Link>

      <div className='simpleCalc'>
        <div
          className='simpleCalc__monitor'
          style={
            warning || result
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {warning ? (
            <Warning message={warning} styles={"warning"} />
          ) : result !== null ? (
            <Results result={result} styles={"results"} />
          ) : null}
        </div>
        <Select
          id={"select_1"}
          state={selectedOperator}
          setState={setSelectedOperator}
          styles={"simpleCalc__selectors"}
        />

        <form
          className={"simpleCalc__form"}
          onSubmit={handleSubmit}
        >
          <Input
            labelText={"Input first number"}
            id={"input_1"}
            state={input_1}
            setState={setInput_1}
            styles={"simpleCalc__input"}
          />
          <Input
            labelText={"Input second number"}
            id={"input_2"}
            state={input_2}
            setState={setInput_2}
            styles={"simpleCalc__input"}
          />
          <input
            type={"submit"}
            value={"Calculate"}
            className={"simpleCalc__calculate"}
          />
        </form>
      </div>
    </>
  );
};
