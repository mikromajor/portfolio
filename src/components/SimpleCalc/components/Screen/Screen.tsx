import { Results, Warning } from "../../ui";
import { useSelector } from "react-redux";
import { getStoreSelector } from "../../../../store/selectors/simpleCalcSelector";

export const Screen = () => {
  const { result, error } = useSelector(getStoreSelector);

  return (
    <>
      {error ? (
        <Warning
          message={error}
          styles={
            "simpleCalc__screen simpleCalc__screen-warning"
          }
        />
      ) : (
        <Results
          result={result}
          styles={
            "simpleCalc__screen simpleCalc__screen-results"
          }
        />
      )}
    </>
  );
};
