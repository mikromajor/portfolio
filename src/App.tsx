import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./ui";
import * as l from "./handlers/lazyImport";
import { default as p } from "./constants/ROUT_PATH";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={p.PROFILE} element={<l.Profile />} />
          <Route
            path={p.FILMS}
            element={<l.GalleriaFilms />}
          />
          <Route
            path={p.FILMS}
            element={<l.GitHubSearcher />}
          />
          <Route path={p.COVID} element={<l.Covid />} />

          <Route path={p.CALC} element={<l.SimpleCalc />} />
          <Route path={p.CARDS} element={<l.DragCards />} />
          <Route path={p.WATCH} element={<l.StopWatch />} />
          <Route path='*' element={<l.Profile />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
