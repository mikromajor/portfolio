import { Results, Warning } from "../../ui";
import { useSelector } from "react-redux";
import { getStoreSelector } from "../../../../store/selectors/simpleCalcSelector";

export const Screen = () => {
  const { result, error } = useSelector(getStoreSelector);

  return (
    <div
      className='simpleCalc__screen'
      style={
        !error || result
          ? { visibility: "visible" }
          : { visibility: "hidden" }
      }
    >
      {error ? (
        <Warning
          message={error}
          styles={"simpleCalc__warning"}
        />
      ) : (
        <Results
          result={result}
          styles={"simpleCalc__results"}
        />
      )}
    </div>
  );
};
