import React, { memo, FC, useEffect, useRef } from "react";
import { CurrentUserType } from "../../types";
import { Title } from "../../ui";
import { UserData, ReposData } from "./components";
import { Button } from "react-bootstrap";

import "./UserInfo.scss";

type Props = {
  currentUser: CurrentUserType;
  callback: () => void;
};

const UserInfo = ({ currentUser, callback }: Props) => {
  const userInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (userInfoRef?.current)
      userInfoRef.current.scrollIntoView();
  }, []);

  return (
    <>
      {currentUser && currentUser.userData && (
        <div className='userInfo' ref={userInfoRef}>
          <Title />
          <UserData userData={currentUser.userData} />
          <Button
            onClick={callback}
            variant='secondary'
            style={{ marginBottom: "20px" }}
          >
            Come back to search
          </Button>
          <ReposData reposData={currentUser.reposData} />
        </div>
      )}
    </>
  );
};

export default memo(UserInfo);
