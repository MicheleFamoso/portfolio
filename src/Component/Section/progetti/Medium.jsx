import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Medium = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-dettagli">
      <div className="bg-word">FULL STACK DEVELOPER</div>
      <div onClick={() => navigate("/", { state: { scrollTo: "progetti" } })}>
        <X size={40} strokeWidth={1.5} className="icon-dettagli" />
      </div>
      <div className="section-dettagli-center">
        <div className="dettagli-video">
          <h1 className="title-mobile">MedClone</h1>
          <video src="/video/Medium.mp4" autoPlay muted loop controls></video>
        </div>

        <div className="section-dettagli-center-secondary">
          <div className="dettagli-video-mobile">
            <video
              src="/video/Medium_Mobile.mp4"
              autoPlay
              muted
              loop
              controls
            ></video>
          </div>
          <div className="section-dettagli-aside">
            <p>
              MediumClone è una replica semplice e responsive di Medium,
              realizzata con HTML e CSS puri. Ricrea la struttura e lo stile
              della piattaforma originale, adattandosi a qualsiasi dispositivo e
              offrendo un’interfaccia pulita e leggibile. Realizzata per un
              esercizio di progettazione front-end.
            </p>
            <div className="section-dettagli-link">
              <a
                href="https://github.com/MicheleFamoso/Medium-Clone"
                target="_blank"
              >
                GITHUB!
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-dettagli-tertiary">
        <h1>MedClone</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medium;
