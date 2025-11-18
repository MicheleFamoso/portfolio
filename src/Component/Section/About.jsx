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
              Per anni ho lavorato in ristoranti stellati, dove ogni piatto
              nasceva da precisione millimetrica, timing perfetto e creatività
              sotto pressione. In cucina ho imparato che l'eccellenza si
              costruisce sui dettagli. <br />
              <br /> Nel tempo libero programmavo, e ho scoperto qualcosa di
              sorprendente: i due mondi si somigliavano più di quanto pensassi.
              Entrambi richiedono problem-solving continuo, rigore
              nell'esecuzione e una determinazione costante a migliorare.
              <br />
              <br />
              La transizione non è stata semplice, ma la disciplina che mi ha
              formato in cucina mi guida oggi nello sviluppo. Ogni riga di
              codice è come un ingrediente: deve stare al posto giusto, al
              momento giusto.
              <br /> <br />
              Ho cambiato strada, ma la passione è rimasta invariata: creare
              qualcosa di speciale.
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
                  <a href="https://github.com/MicheleFamoso">Github</a>
                </p>
              </div>
              <div className="cv-about">
                <div className="wrap-img">
                  <img id="icon-cv" src="/icon/cv_6588184.png" alt="cv-icon" />
                </div>

                <a id="a" href="/CV Michele Famoso.pdf" download>
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
