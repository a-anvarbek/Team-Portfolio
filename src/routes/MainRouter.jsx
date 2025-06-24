import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/home/Projects";
import AboutMe from "../pages/about/AboutMe";


const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PROJECTS} element={<Projects />} />
      <Route path={ROUTES.ABOUTME} element={<AboutMe />} />



    </Routes>
  );
};

export default MainRouter;
