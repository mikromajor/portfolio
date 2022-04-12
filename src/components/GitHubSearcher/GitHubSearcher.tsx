import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";
import { Link } from "react-router-dom";

import "./GitHubSearcher.scss";

export const GitHubSearcher = () => {
  return (
    <PageContext.Provider value={PageCache.get()}>
      <Link to='/portfolio'>{"<-- BACK"}</Link>
      <div className={"gitHubSearcher"}>
        <Layout />
      </div>
    </PageContext.Provider>
  );
};
