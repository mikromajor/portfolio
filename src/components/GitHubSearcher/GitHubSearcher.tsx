import { PageContext } from "./context";
import { Layout } from "./сomponents";
import { PageCache } from "./utils";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const GitHubSearcher = () => {
  return (
    <>
      {" "}
      <Link to='/portfolio'>
        <Button
          variant={"secondary"}
          style={{
            boxShadow: "10px 10px 10px rgb(100, 100, 100)",
          }}
        >
          Back
        </Button>
      </Link>
      <PageContext.Provider value={PageCache.get()}>
        <Layout />
      </PageContext.Provider>
    </>
  );
};
