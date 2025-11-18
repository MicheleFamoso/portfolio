import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Netflix = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-dettagli">
      <div className="bg-word">FULL STACK DEVELOPER</div>
      <div onClick={() => navigate("/", { state: { scrollTo: "progetti" } })}>
        <X size={40} strokeWidth={1.5} className="icon-dettagli" />
      </div>
      <div className="section-dettagli-center">
        <div className="dettagli-video">
          <h1 className="title-mobile">NetClone</h1>
          <video src="/video/Netflix.mp4" autoPlay muted loop controls></video>
        </div>

        <div className="section-dettagli-center-secondary">
          <div className="dettagli-video-mobile">
            <video
              src="/video/Netflix_Mobile.mp4"
              autoPlay
              muted
              loop
              controls
            ></video>
          </div>
          <div className="section-dettagli-aside">
            <p>
              NetClone è un clone di Netflix completamente responsive — desktop,
              tablet e mobile — sviluppato con Bootstrap e Sass. Recupera i
              contenuti tramite un’API esterna e include una gestione degli
              errori per le fetch, con messaggi chiari in caso di problemi,
              garantendo un’esperienza d’uso sempre coerente e affidabile.
            </p>
            <div className="section-dettagli-link">
              <a
                href="https://github.com/MicheleFamoso/NetflixClone"
                target="_blank"
              >
                GITHUB!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-dettagli-tertiary">
        <h1>NetClone</h1>
        <div className="section-dettagli-card">
          <h2>Tecnologie Usate</h2>
          <div className="grid-3">
            <div className="card-section">
              <img src="/icon/html.png" alt="" />
              <p> html</p>
            </div>
            <div className="card-section">
              <img src="/icon/css-3.png" alt="" />
              <p> Css</p>
            </div>
            <div className="card-section">
              <img src="/icon/bootstrap.png" alt="" />
              <p> Bootstrap</p>
            </div>
            <div className="card-section">
              <img src="/icon/sass.png" alt="" />
              <p> Sass</p>
            </div>
            <div className="card-section">
              <img src="/icon/java.png" alt="" />
              <p> Javascript</p>
            </div>
            <div className="card-section">
              <img src="/icon/sciene.png" alt="" />
              <p> React</p>
            </div>

            <div className="card-section">
              <img src="/icon/api.png" alt="" />
              <p>REST api</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Netflix;
