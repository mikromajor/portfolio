import { Profile, SimpleCalc } from "..";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/portfolio'
          element={<Profile mes='all right' />}
        />
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
