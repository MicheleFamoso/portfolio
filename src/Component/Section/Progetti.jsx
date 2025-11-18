import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Progetti = () => {
  const [activeProject, setActiveProject] = useState("haccp");
  const navigate = useNavigate();

  const videos = {
    haccp: "/img/animation.gif",
    lux: "/img/doc_2025-11-18_20-12-31.gif",
    netflix: "/img/doc_2025-11-18_20-12-24.gif",
    medium: "/img/doc_2025-11-18_20-12-10.gif",
  };

  return (
    <div id="progetti" className="section section-progetti">
      <div className="card-tittle-progetti">
        <h2>PROGETTI</h2>
        <div className="card-progetti">
          <div className="card-p-layout">
            <div className="video-wrapper">
              <img src={videos[activeProject]} alt="" />
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
                onClick={() => navigate("/lux")}
              >
                <span>02</span> Lux portfolio
              </h3>
              <h3
                className={activeProject === "netflix" ? "active" : ""}
                onMouseEnter={() => setActiveProject("netflix")}
                onClick={() => navigate("/netflix")}
              >
                <span>03</span> NetClone
              </h3>
              <h3
                className={activeProject === "medium" ? "active" : ""}
                onMouseEnter={() => setActiveProject("medium")}
                onClick={() => navigate("/medium")}
              >
                <span>04</span> Medium Clone
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progetti;
