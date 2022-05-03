import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";
import { Link } from "react-router-dom";

export const GitHubSearcher = () => {
  return (
    <PageContext.Provider value={PageCache.get()}>
      <Link to='/portfolio'>{"BACK"}</Link>
      <Layout />
    </PageContext.Provider>
  );
};
