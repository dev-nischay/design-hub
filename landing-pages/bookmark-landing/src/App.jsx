import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainlayout } from "./layouts/Mainlayout";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
