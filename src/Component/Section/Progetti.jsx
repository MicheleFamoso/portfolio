import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Progetti = () => {
  const [activeProject, setActiveProject] = useState("haccp");
  const navigate = useNavigate();

  const videos = {
    haccp: "/video/Kooha-2025-11-11-10-41-40.webm",
    lux: "/video/lux.webm",
    netflix: "/videos/netflix.mp4",
  };

  return (
    <div id="progetti" className="section section-progetti">
      <h2 className="Tittle">Progetti</h2>
      <div className="card-progetti">
        <div className="card-p-layout">
          <div className="video-wrapper">
            <video src={videos[activeProject]} autoPlay muted loop />
          </div>

          <div className="lista-progetti">
            <h3
              className={activeProject === "haccp" ? "active" : ""}
              onMouseEnter={() => setActiveProject("haccp")}
              onClick={() => navigate("/dHaccp")}
            >
              <span>01</span> d/Haccp
            </h3>
            <h3
              className={activeProject === "lux" ? "active" : ""}
              onMouseEnter={() => setActiveProject("lux")}
            >
              <span>02</span> Lux portfolio
            </h3>
            <h3
              className={activeProject === "netflix" ? "active" : ""}
              onMouseEnter={() => setActiveProject("netflix")}
            >
              <span>03</span> Netflix Clone
            </h3>
            <h3
              className={activeProject === "netflix" ? "active" : ""}
              onMouseEnter={() => setActiveProject("netflix")}
            >
              <span>04</span> Netflix Clone
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progetti;
