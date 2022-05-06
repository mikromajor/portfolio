import { Button } from "../../ui";
import { SORTED_BUTTONS } from "../../constants/constants";

const Buttons = () => {
  return (
    <div className='simpleCalc__buttons'>
      {SORTED_BUTTONS.reverse().map((btnName, i) => (
        <Button key={i + btnName} name={btnName} i={i} />
      ))}
    </div>
  );
};
export default Buttons;
