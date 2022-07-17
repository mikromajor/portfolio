import { FC } from "react";
import {
  KeysAboutMe,
  KeysPetProject,
  ValueAboutMe,
  ValuePetProject,
} from "../../types";
import { Ul, PetLink } from "..";

type SecondaryInfProps = {
  showLink: boolean;
  header: KeysAboutMe | KeysPetProject;
  body: ValueAboutMe | ValuePetProject;
};

export const SecondaryInf: FC<SecondaryInfProps> = ({
  body,
  showLink,
  header,
}) => {
  const hasNestedObj = typeof body === "object";

  const bodyKeys: string[] = [];
  const bodyValues: string[] = [];

  if (hasNestedObj) {
    for (const [key, val] of Object.entries(body)) {
      bodyKeys.push(key);
      bodyValues.push(val);
    }
  }
  return (
    <>
      {hasNestedObj ? (
        <Ul bodyKeys={bodyKeys} bodyValues={bodyValues} />
      ) : (
        <>
          <div className='accordion__body'>{body}</div>
          {showLink && <PetLink header={header} />}
        </>
      )}
    </>
  );
};
