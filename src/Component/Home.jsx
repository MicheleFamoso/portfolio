import Sidebar from "./Sidebar";
import Presentazione from "./Section/Presentazione";
import SidebarRight from "./SidebarRight";
import Stack from "./Section/Stack";
import Progetti from "./Section/Progetti";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "./Section/About";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
