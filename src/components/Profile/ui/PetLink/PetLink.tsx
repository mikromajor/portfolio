import { FC } from "react";
import { Link } from "react-router-dom";
import { LINK_PATH, SINGLE_APP } from "../../constants";
import { KeysPetProject, KeysAboutMe } from "../../types";

type PetLinkProps = {
  header: KeysPetProject | KeysAboutMe;
};

export const PetLink: FC<PetLinkProps> = ({ header }) => {
  let isSingleApp = !!SINGLE_APP.find(
    (el) => el === header
  );
  return (
    <>
      {isSingleApp ? (
        <a
          href={LINK_PATH + header + "/"}
          className='accordionBody__link'
        >
          Click to see the demo - {header}
        </a>
      ) : (
        <Link to={"/" + header} className='accordion__link'>
          Click to see the demo - {header}
        </Link>
      )}
    </>
  );
};
