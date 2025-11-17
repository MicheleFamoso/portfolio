import { Presentation } from "lucide-react";
import Sidebar from "./Sidebar";
import Presentazione from "./Section/Presentazione";
import SidebarRight from "./SidebarRight";
import Stack from "./Section/Stack";
import Progetti from "./Section/Progetti";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./Section/About";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const container = document.querySelector(".section-layout");
    const el = document.querySelector(hash);

    if (container && el) {
      container.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  }, [hash]);
  return (
    <div className="home-layout">
      <div>
        <Sidebar />
      </div>
      <div className="section-layout">
        <div class="bg-word">FULL STACK DEVELOPER</div>
        <Presentazione />
        <Progetti />
        <Stack />
        <About />
      </div>
      <div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default Home;
