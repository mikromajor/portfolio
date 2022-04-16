import { FC } from "react";

const CardDeck: FC<any> = ({ children, length }) => {
  let wrapper = children;
  while (length > 0) {
    length--;
    wrapper = <div className='wrapperCard'>{wrapper}</div>;
  }
  return <>{wrapper}</>;
};
export default CardDeck;
