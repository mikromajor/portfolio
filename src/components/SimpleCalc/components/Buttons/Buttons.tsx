import { FC } from "react";
import { Button } from "../../ui";
import {
  setNumbType,
  setOperatorType,
} from "../../../../store/ACTIONS/SIMPLE_CALC_ACTIONS";

type ButtonsType = {
  buttons: string[];
  callback: setNumbType | setOperatorType;
  styles: string;
};

export const Buttons: FC<ButtonsType> = ({
  buttons,
  callback,
  styles,
}) => {
  return (
    <div className={styles}>
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
