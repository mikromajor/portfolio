import { Film } from "../../../constants/types";
import cl from "./Counter.module.css";

const Counter = ({
  favoriteList,
}: {
  favoriteList: Film[];
}) => {
  return (
    <div className={cl.counter}>{favoriteList.length}</div>
  );
};
export default Counter;
