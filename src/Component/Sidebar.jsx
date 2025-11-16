import { useState } from "react";
import { X } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav>
      {isOpen ? (
        <div className=" nav-open">
          <button className="nav-btn-close" onClick={() => setIsopen(false)}>
            <X size={26} strokeWidth={1.5} />
          </button>

          <div className="nav-link">
            <h3>
              HOME<sup> 01</sup>
            </h3>
            <h3>
              PROGETTI<sup> 02</sup>
            </h3>
            <h3>
              TECNOLOGIE<sup> 03</sup>
            </h3>
            <h3>
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
