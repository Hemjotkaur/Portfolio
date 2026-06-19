import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import homebg from "./assets/home-bg.jpg";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-cover bg-fixed bg-center min-h-screen"
      style={{ backgroundImage: `url(${homebg})` }}
    >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
            </>
          }
        />

        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
