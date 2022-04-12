import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";

import "./GitHubSearcher.scss";

export const GitHubSearcher = () => {
  return (
    <PageContext.Provider value={PageCache.get()}>
      <div className={"gitHubSearcher"}>
        <Layout />
      </div>
    </PageContext.Provider>
  );
};
