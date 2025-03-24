import { Routes, Route } from "react-router-dom";
import Shaping from "../layout/Shaping";
import Home from "../pages/Home";
import About from "../pages/About";
import Card from "../pages/Card";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Shaping />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Card />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

