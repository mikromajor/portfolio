// import { Link } from "react-router-dom";
import { Back } from "../../../ui";
import { useSelector } from "react-redux";
import { Screen, ButtonsPanel, SidePanel } from "./";
import { getSideBare } from "../../../store/selectors/simpleCalcSelector";
import "./SimpleCalc.scss";

export const SimpleCalc = () => {
  const sideBare = useSelector(getSideBare);
  return (
    <>
      <Back />
      <div
        className='simpleCalc simpleCalc-own'
        style={{ width: sideBare ? "675px" : "445px" }}
      >
        <div className='simpleCalc simpleCalc__mainPanel'>
          <Screen />
          <ButtonsPanel />
        </div>
        <SidePanel />
      </div>
    </>
  );
};
