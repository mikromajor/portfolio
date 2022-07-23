import { FC } from "react";
import { requireImg } from "../../handlers";
import { KeysAboutMe, KeysPetProject } from "../../types";

type PrimaryInfProps = {
  header: KeysAboutMe | KeysPetProject;
};

export const PrimaryInf: FC<PrimaryInfProps> = ({
  header,
}) => {
  const headerContent = header.toUpperCase();
  const icon = requireImg(header);
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
