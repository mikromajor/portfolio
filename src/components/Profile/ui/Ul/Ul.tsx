import { ListItem } from "..";
import { FC } from "react";

type UlProps = {
  bodyKeys: string[];
  bodyValues: string[];
};

export const Ul: FC<UlProps> = ({
  bodyKeys,
  bodyValues,
}) => {
  return (
    <ul className='accordion__ul'>
      {bodyValues.map((bodyValue, i) => (
        <ListItem
          content={bodyValue}
          contentHeader={bodyKeys[i]}
          key={bodyKeys[i] + i}
        />
      ))}
    </ul>
  );
};
