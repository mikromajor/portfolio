import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";
import { Back } from "../../ui";

export const GitHubSearcher = () => {
  return (
    <>
      <Back />
      <PageContext.Provider value={PageCache.get()}>
        <Layout />
      </PageContext.Provider>
    </>
  );
};
