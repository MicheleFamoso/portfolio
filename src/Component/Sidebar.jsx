import { useState } from "react";
import { Circle } from "lucide-react";
const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className={isOpen ? "nav-open" : ""}>
      {isOpen ? (
        <div className="nav-link">
          <div>
            <p>Home</p>
            <p>Progetti</p>
            <p>Contatti</p>
          </div>
          <div>
            <button onClick={() => setIsopen(false)}>
              <Circle
                size={20}
                color="#333333"
                strokeWidth={3}
                className="circle"
              />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsopen(true)}>
            <Circle
              size={20}
              color="#333333"
              strokeWidth={3}
              className="circle"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
