import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shaping from "../layout/Shaping";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Shaping />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

