import { Route, Routes } from "react-router";

import ROUTES from "./routes";

// Import Pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/home/Projects";
import Footer from "../pages/home/Footer";


const MainRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.PROJECTS} element={<Projects />} />
      <Route path={ROUTES.FOOTER} element={<Footer />} />

      


    </Routes>
  );
};

export default MainRouter;
