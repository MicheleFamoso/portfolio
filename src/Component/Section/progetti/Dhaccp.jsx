import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Dhaccp = () => {
  const navigate = useNavigate();
  return (
    <div className="layout-dettagli">
      <div class="bg-word">FULL STACK DEVELOPER</div>
      <div onClick={() => navigate("/#progetti")}>
        <X size={40} strokeWidth={1.5} className="icon-dettagli" />
      </div>
      <div className="section-dettagli-center">
        <div className="dettagli-video">
          <video
            src="/public/video/Kooha-2025-11-11-10-41-40.webm"
            autoPlay
            muted
            loop
            controls
          ></video>
        </div>

        <div className="section-dettagli-center-secondary">
          <div className="dettagli-video-mobile">
            <video
              src="/public/video/dhaccpMobile.webm"
              autoPlay
              muted
              loop
              controls
            ></video>
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
