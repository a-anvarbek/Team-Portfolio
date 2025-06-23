import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
    </Routes>
  );
};

export default MainRouter;
