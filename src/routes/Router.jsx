import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Test from "../pages/Test";
import Shaping from "../layout/Shaping";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Shaping />}>
        <Route index element={<Home />} /> 
      </Route>
    </Routes>
  );
};

export default AppRouter;

