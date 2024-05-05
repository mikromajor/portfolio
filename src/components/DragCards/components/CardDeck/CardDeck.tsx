import { FC } from "react";

export const CardDeck: FC<any> = ({ children, length }) => {
  let wrapper = children;
  while (length > 0) {
    length--;
    wrapper = (
      <div
        className='drug-cards__first-card'
        style={{ zIndex: `${length}` }}
      >
        {wrapper}
      </div>
    );
  }
  return (
    <div className='drug-cards__card-deck'>{wrapper}</div>
  );
};
