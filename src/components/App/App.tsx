import {
  Profile,
  SimpleCalc,
  GitHubSearcher,
  GalleriaFilms,
  Covid,
} from "..";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/portfolio'
          element={<Profile mes='all right' />}
        />

        <Route path='/films' element={<GalleriaFilms />} />
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
    </>
  );
}

export default App;
