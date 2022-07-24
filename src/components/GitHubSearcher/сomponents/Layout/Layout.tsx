import { useState, useContext, useRef } from "react";
import { PageContext } from "../../context";
import { UsersInfo } from "../.";
import { UserInfo } from "../UserInfo";
import { Error } from "../../ui";
import { Loader } from "../../../../ui";

import "./Layout.scss";

const Layout = () => {
  const { cacheCurrentUser } = useContext(PageContext);
  const [currentUser, setCurrentUser] = useState(
    cacheCurrentUser
  );
  const [isUserInfoLoad, setIsUserInfoLoad] =
    useState(false);
  const [isErrorUserInfo, setIsErrorUserInfo] =
    useState("");
  const layoutRef = useRef<HTMLDivElement>(null);
  const scrollToLayout = () => {
    layoutRef.current?.scrollIntoView();
  };

  return (
    <div className={"layout"} ref={layoutRef}>
      <UsersInfo
        setCurrentUser={setCurrentUser}
        setIsUserInfoLoad={setIsUserInfoLoad}
        setIsErrorUserInfo={setIsErrorUserInfo}
      />
      {!!isErrorUserInfo ? (
        <Error message={isErrorUserInfo} />
      ) : isUserInfoLoad ? (
        <div className='loader__wrap'>
          <Loader />
        </div>
      ) : (
        <UserInfo
          currentUser={currentUser}
          callback={scrollToLayout}
        />
      )}
    </div>
  );
};
export default Layout;
