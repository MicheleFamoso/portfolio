import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoadingPage from "./Component/Loading/LoadingPage";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
