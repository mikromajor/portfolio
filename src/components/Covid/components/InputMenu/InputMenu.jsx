import { useCallback, useEffect, useState } from "react";
import { Button, Error, Input } from "../UI";
import handleDate from "../../utils/handleDate";
import { INIT_RESULTS } from "../../utils/constants";

import "./InputMenu.scss";

const InputMenu = ({
  maxPeriod,
  setPeriod,
  setShowInputMenu,
  setShowStatistics,
}) => {
  const [results, setResults] = useState(INIT_RESULTS);
  console.log("results", results);

  const memoCallback = useCallback(
    (inputVal, label) => {
      setResults((prev) => {
        return {
          ...prev,
          ...handleDate(inputVal, label, maxPeriod),
        };
      });
    },
    [maxPeriod, setResults]
  );
  useEffect(() => {
    if (results.period_start && results.period_end) {
      setPeriod({
        start_period: results.period_start,
        end_period: results.period_end,
      });
      setShowStatistics(true);
    } else {
      setShowStatistics(false);
    }
  }, [
    results.period_start,
    results.period_end,
    setPeriod,
    setShowStatistics,
  ]);

  return (
    <div className='inputMenu' id='inputMenu'>
      <h4>
        Period must be limited no more {maxPeriod} days ago
        to last statistics day.
      </h4>
      <label name='start_period'>Enter periods start</label>
      <Input label={"start"} memoCallback={memoCallback} />

      <label name='end_period'>Enter periods end</label>
      <Input label={"end"} memoCallback={memoCallback} />
      <Button
        label={"Hidden input menu"}
        callback={() => setShowInputMenu(false)}
      />
      {!!results.warning_start ? (
        <Error label={results.warning_start} />
      ) : null}
      {!!results.warning_end ? (
        <Error label={results.warning_end} />
      ) : null}
    </div>
  );
};
export default InputMenu;
