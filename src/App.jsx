import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Component/Home";
import Dhaccp from "./Component/Section/progetti/Dhaccp";
import Lux from "./Component/Section/progetti/Lux";
import Netflix from "./Component/Section/progetti/Netflix";
import Medium from "./Component/Section/progetti/Medium";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dHaccp" element={<Dhaccp />}></Route>
        <Route path="/lux" element={<Lux />}></Route>
        <Route path="/netflix" element={<Netflix />}></Route>
        <Route path="/medium" element={<Medium />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
