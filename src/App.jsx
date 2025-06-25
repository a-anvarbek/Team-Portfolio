import { BrowserRouter } from "react-router";

import MainRouter from "./routes/MainRouter";
import Navbar from "./pages/components/Navbar";
import Contact from "./pages/components/Contact";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <MainRouter />

      <Contact />
    </BrowserRouter>
  );
}

export default App;
