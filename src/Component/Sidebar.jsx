import { useState } from "react";
import { X } from "lucide-react";
import { useEffect } from "react";
const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav>
      {isOpen ? (
        <div className=" nav-open">
          <button className="nav-btn-close" onClick={() => setIsopen(false)}>
            <X size={26} strokeWidth={1.5} />
          </button>

          <div className="nav-link">
            <h3
              className={currentSection === "home" ? "active-nav" : ""}
              onClick={() => {
                const el = document.getElementById("home");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              HOME<sup> 01</sup>
            </h3>
            <h3
              className={currentSection === "progetti" ? "active-nav" : ""}
              onClick={() => {
                const el = document.getElementById("progetti");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              PROGETTI<sup> 02</sup>
            </h3>
            <h3
              className={currentSection === "stack" ? "active-nav" : ""}
              onClick={() => {
                const el = document.getElementById("stack");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              TECNOLOGIE<sup> 03</sup>
            </h3>
            <h3
              className={currentSection === "contatti" ? "active-nav" : ""}
              onClick={() => {
                const el = document.getElementById("contatti");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTATTI<sup> 04</sup>
            </h3>
          </div>
        </div>
      ) : (
        <div className="nav-close">
          <button className="menu-nav" onClick={() => setIsopen(true)}>
            Menu
          </button>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
