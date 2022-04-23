import { FC } from "react";

export const CardDeck: FC<any> = ({ children, length }) => {
  let wrapper = children;
  while (length > 0) {
    length--;
    wrapper = (
      <div
        className='wrapperCard'
        style={{ zIndex: `${length}` }}
      >
        {wrapper}
      </div>
    );
  }
  return <div className='CardDeckStyle'>{wrapper}</div>;
};
