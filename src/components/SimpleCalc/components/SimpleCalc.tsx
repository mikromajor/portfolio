// import { Link } from "react-router-dom";
import { Back } from "../../../ui";
import { useSelector } from "react-redux";
import { Screen, BlockButtons, SidePanel } from "./";
import { getSideBare } from "../../../store/selectors/simpleCalcSelector";
import "./SimpleCalc.scss";

export const SimpleCalc = () => {
  const sideBare = useSelector(getSideBare);
  return (
    <>
      <Back />
      <div
        className='simpleCalc'
        style={{ width: sideBare ? "750px" : "445px" }}
      >
        <div className='simpleCalc__main'>
          <Screen />
          <BlockButtons />
        </div>
        <SidePanel />
      </div>
    </>
  );
};
