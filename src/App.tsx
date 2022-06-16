import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "./components/GalleriaFilms/components/UI";

const Profile = lazy(() => import("./components/Profile"));
const SimpleCalc = lazy(
  () => import("./components/SimpleCalc")
);
const StopWatch = lazy(
  () => import("./components/StopWatch")
);
const GitHubSearcher = lazy(
  () => import("./components/GitHubSearcher")
);
const GalleriaFilms = lazy(
  () => import("./components/GalleriaFilms")
);
const Covid = lazy(() => import("./components/Covid"));
const DragCards = lazy(
  () => import("./components/DragCards")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/portfolio' element={<Profile />} />
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
            path='/dragCards'
            element={<DragCards />}
          />
          <Route
            path='/stopWatch'
            element={<StopWatch />}
          />
          <Route path='*' element={<Profile />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
