import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Footer } from "./components/footer/footer";
import Navbar from "./components/Navbar/navbar";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import CertificationsPage from "./pages/certificationsPage/certificationsPage";
import DetailProject from "./pages/ProjectsPage/detailProject/detailProject";

function App() {
  const [lenguageEN, setLenguageEN] = useState(false);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <div>
      <Navbar setLenguageEN={setLenguageEN} lenguageEN={lenguageEN} />
      <Routes>
        <Route path="/" element={<Home lenguageEN={lenguageEN} />} />
        <Route path="/projects" element={<ProjectsPage lenguageEN={lenguageEN} />} />
        <Route path="/certifications" element={<CertificationsPage lenguageEN={lenguageEN} />} />
        <Route path="/projects/:params" element={<DetailProject lenguageEN={lenguageEN} />} />
      </Routes>
      <Footer lenguageEN={lenguageEN} />
    </div>
  );
}

export default App;
