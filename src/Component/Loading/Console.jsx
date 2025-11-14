import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const Console = () => {
  const navigate = useNavigate();
  const lines = [
    "[00:00:00] Avvio sistema...",
    "[00:00:01] Caricamento configurazione utente: /home/michele/.config (ok)",
    "[00:00:01] Inizializzo moduli: network, auth, ui",
    "[00:00:02] Network → probing interfaces... done",
    "[00:00:02] Auth    → checking credentials... ok",
    '[00:00:03] UI      → mounting layout "modern"... done',
    "[00:00:03] Caricamento risorse: immagini (12/48) ▓▓░░░░░░░ 25%",
    "[00:00:04] Caricamento risorse: controller (4/10) ▓▓▓░░░░ 40%",
    "[00:00:05] Cache    → ricostruzione indice (3/7) ▓▓▓▓░░ 57%",
    "[00:00:06] DB       → sincronizzazione minima... ok",
    "[00:00:07] Checkpoint creato: /tmp/startup.chk",
    "[00:00:07] Caricamento plugin: analytics, vanta, auth2",
    "[00:00:08] Vanta    → inizializzazione shaders... ok",
    "[00:00:09] Caricamento risorse: immagini (36/48) ▓▓▓▓▓▓░ 75%",
    "[00:00:10] Caricamento componenti UI... completato",
    "[00:00:11] Verifica sicurezza: CORS, CSP, nonce... ok",
    "[00:00:12] Inizializzazione finita. Benvenuto.",
  ];
  const textRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!textRef.current) return;

    const timeline = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    gsap.set(textRef.current, { text: "" });

    lines.forEach((line) => {
      timeline.to(textRef.current, {
        duration: 0.05,
        onUpdate: () => {
          textRef.current.textContent += line + "\n";
          textRef.current.scrollTop = textRef.current.scrollHeight;
        },
      });
    });
  }, []);

  return (
    <div className="wrapperStyle">
      <pre ref={textRef} className="consoleStyle"></pre>
      <div>
        <button
          onClick={() => navigate("/home")}
          className="btn-loading"
          disabled={isLoading}
        >
          {isLoading ? "Caricamento..." : "Accedi"}
        </button>
      </div>
    </div>
  );
};
export default Console;
