import { FC } from "react";

type PrimaryInfProps = {
  icon: string;
  header: string;
};

export const PrimaryInf: FC<PrimaryInfProps> = ({
  icon,
  header,
}) => {
  const headerContent = header.toUpperCase();
  return (
    <>
      {!!icon && (
        <img
          src={icon}
          alt={header}
          className='accordion__icon'
        />
      )}
      <h3 className='accordion__content accordion__content-margin'>
        {headerContent}
      </h3>
    </>
  );
};
