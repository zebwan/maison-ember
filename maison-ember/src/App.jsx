import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Roastery from "./pages/Roastery/Roastery";
import Journal from "./pages/Journal/Journal";
import Visit from "./pages/Visit/Visit";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/roastery" element={<Roastery />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/visit" element={<Visit />} />
      </Route>
    </Routes>
  );
}

export default App;