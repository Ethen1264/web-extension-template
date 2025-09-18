import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Test from "./page/test";

function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
