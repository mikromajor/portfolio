import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "../GalleriaFilms/components/UI";

const Profile = lazy(() => import("../Profile"));
const SimpleCalc = lazy(() => import("../SimpleCalc"));
const GitHubSearcher = lazy(
  () => import("../GitHubSearcher")
);
const GalleriaFilms = lazy(
  () => import("../GalleriaFilms")
);
const Covid = lazy(() => import("../Covid"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path='/portfolio'
            element={<Profile mes='all right' />}
          />

          <Route
            path='/films'
            element={<GalleriaFilms />}
          />
          <Route
            path='/searcher'
            element={<GitHubSearcher />}
          />
          <Route path='/covid' element={<Covid />} />
          <Route path='/calc' element={<SimpleCalc />} />
          <Route
            path='*'
            element={<Profile mes='not found' />}
          />
        </Routes>
      </Suspense>
    </>
  );
};
