import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Dhaccp = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-dettagli">
      <div class="bg-word">FULL STACK DEVELOPER</div>
      <div onClick={() => navigate("/")}>
        <X size={40} strokeWidth={1.5} className="icon-dettagli" />
      </div>
      <div className="section-dettagli-center">
        <div className="dettagli-video">
          <video src="/public/video/Kooha-2025-11-11-10-41-40.webm"></video>
        </div>
        <div className="section-dettagli-center-secondary">
          <div className="dettagli-video-mobile">
            <video src="/public/video/dhaccpMobile.webm"></video>
          </div>
          <div className="section-dettagli-aside">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              sapiente ipsam reiciendis ad maxime magni, consectetur dicta,
              earum corporis repudiandae molestias dolorum expedita, numquam
              officia omnis perspiciatis optio laborum. Cupiditate!
            </p>
            <div className="section-dettagli-link">
              <a target="_blank" href="https://github.com/MicheleFamoso">
                GITHUB
              </a>
              <a target="_blank" href="https://github.com/MicheleFamoso">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-dettagli-tertiary">
        <div className="section-dettagli-card">
          <h1>Tecnologie Usate</h1>
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
              <img src="/icon/sass.png" alt="" />
              <p> Sass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dhaccp;
