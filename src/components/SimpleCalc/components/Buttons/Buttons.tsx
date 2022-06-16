import { FC } from "react";
import { Button } from "../../ui";
import {
  setNumbType,
  setOperatorType,
} from "../../../../store/actions/SIMPLE_CALC_ACTIONS";

type ButtonsType = {
  buttons: string[];
  callback: setNumbType | setOperatorType;
};

export const Buttons: FC<ButtonsType> = ({
  buttons,
  callback,
}) => {
  return (
    <div className='simpleCalc__buttons'>
      {buttons.map((btnName, i) => (
        <Button
          key={i + btnName}
          btnName={btnName}
          callback={callback}
        />
      ))}
    </div>
  );
};
