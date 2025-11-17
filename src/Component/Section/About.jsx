const About = () => {
  return (
    <div id="contatti" className="section ">
      <div className="section-about">
        <div className="card-section-about">
          <div className="about">
            <div className="michelin">
              <img src="/icon/MichelinStar.svg.png" alt="" />
              <img src="/icon/MichelinStar.svg.png" alt="" />
              <img src="/icon/codes.png" alt="" />
            </div>
            <h1>Dalla padella al... Codice</h1>
            <p>
              In cucina ho imparato che l'eccellenza nasce dall'attenzione ai
              dettagli e dalla capacità di trasformare ingredienti semplici in
              esperienze memorabili. Poi ho scoperto la programmazione, e ho
              capito che non era poi così diverso. Entrambi i mondi richiedono
              le stesse qualità: problem-solving creativo, rigore
              nell'esecuzione, capacità di lavorare in team e soprattutto la
              determinazione a migliorare costantemente.
            </p>
            <div className="contatti">
              <div>
                <p>
                  <a href="mailto:michelefamoso@gmail.com">Mail</a>
                </p>
                <p>
                  <a href="tel:3661213787">Telefono</a>
                </p>
                <p>
                  <a href="tel:3661213787">Github</a>
                </p>
              </div>
              <div className="cv-about">
                <div className="wrap-img">
                  <img id="icon-cv" src="/icon/cv_6588184.png" alt="cv-icon" />
                </div>

                <a id="a" href="/public/CV Michele Famoso.pdf" download>
                  Scariva cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
