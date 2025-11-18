import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Dhaccp = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-dettagli">
      <div className="bg-word">FULL STACK DEVELOPER</div>
      <div onClick={() => navigate("/", { state: { scrollTo: "progetti" } })}>
        <X size={40} strokeWidth={1.5} className="icon-dettagli" />
      </div>
      <div className="section-dettagli-center">
        <div className="dettagli-video">
          <h1 className="title-mobile">d/Haccp</h1>
          <video src="/video/d_Haccp.mp4" autoPlay muted loop controls></video>
        </div>

        <div className="section-dettagli-center-secondary">
          <div className="dettagli-video-mobile">
            <video
              src="/video/d_Haccp_Mobile.mp4"
              autoPlay
              muted
              loop
              controls
            ></video>
          </div>
          <div className="section-dettagli-aside">
            <p>
              d/Haccp è un’applicazione gestionale full-stack che rivoluziona i
              controlli HACCP, portandoli dal cartaceo al digitale. Ideale per
              ristoranti e aziende alimentari che vogliono semplificare la
              gestione, ridurre gli errori e avere tutto sotto controllo,
              ovunque. Vuoi vedere come funziona in dettaglio? Scopri il
              progetto su{" "}
              <a
                target="_blank"
                href="https://github.com/MicheleFamoso/d-haccp-v2"
              >
                GITHUB!
              </a>
            </p>
            <div className="section-dettagli-link">
              <a target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-dettagli-tertiary">
        <h1>d/haccp</h1>
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
              <img src="/icon/java.png" alt="" />
              <p> Javascript</p>
            </div>
            <div className="card-section">
              <img src="/icon/Tailwind CSS.png" alt="" />
              <p> Tailwind</p>
            </div>
            <div className="card-section">
              <img src="/icon/sciene.png" alt="" />
              <p> React</p>
            </div>
            <div className="card-section">
              <img src="/icon/Redux.png" alt="" />
              <p> Redux</p>
            </div>
            <div className="card-section">
              <img src="/icon/Spring.png" alt="" />
              <p>Spring</p>
            </div>
            <div className="card-section">
              <img src="/icon/java (1).png" alt="" />
              <p>Java</p>
            </div>{" "}
            <div className="card-section">
              <img src="/icon/api.png" alt="" />
              <p>REST api</p>
            </div>
            <div className="card-section">
              <img src="/icon/icons8-jwt-96.png" alt="" />
              <p>JWT auth</p>
            </div>
            <div className="card-section">
              <img src="/icon/SQL Developer.png" alt="" />
              <p>SQL </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dhaccp;
