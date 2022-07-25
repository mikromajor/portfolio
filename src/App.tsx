import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./ui";
import {
  ROUT_PATH as r_p,
  LAZY_PATH as l_p,
} from "./constants";

const Profile = lazy(() => import(`${l_p.PROFILE}`));
const SimpleCalc = lazy(() => import(`${l_p.CALC}`));
const StopWatch = lazy(() => import(`${l_p.WATCH}`));
const GitHubSearcher = lazy(
  () => import(`${l_p.SEARCHER}`)
);
const GalleriaFilms = lazy(() => import(`${l_p.FILMS}`));
const Covid = lazy(() => import(`${l_p.COVID}`));
const DragCards = lazy(() => import(`${l_p.CARDS}`));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={r_p.PROFILE} element={<Profile />} />
          <Route
            path={r_p.FILMS}
            element={<GalleriaFilms />}
          />
          <Route
            path={r_p.SEARCHER}
            element={<GitHubSearcher />}
          />
          <Route path={r_p.COVID} element={<Covid />} />

          <Route path={r_p.CALC} element={<SimpleCalc />} />
          <Route path={r_p.CARDS} element={<DragCards />} />
          <Route path={r_p.WATCH} element={<StopWatch />} />
          <Route path='*' element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
