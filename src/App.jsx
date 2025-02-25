import { Route, Routes } from "react-router";
import Layout from "./layouts/Layout";
import ToDO from "./pages/ToDO";
import InProgress from "./pages/InProgress";
import Done from "./pages/Done";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route index element={<ToDO></ToDO>}></Route>
            <Route path="about" element={<InProgress></InProgress>}></Route>
            <Route path="done" element={<Done></Done>}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
