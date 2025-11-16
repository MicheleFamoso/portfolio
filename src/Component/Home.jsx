import { Presentation } from "lucide-react";
import Sidebar from "./Sidebar";
import Presentazione from "./Section/Presentazione";
import SidebarRight from "./SidebarRight";
import Stack from "./Section/Stack";
import Progetti from "./Section/Progetti";

const Home = () => {
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
      </div>
      <div>
        <SidebarRight />
      </div>
    </div>
  );
};

export default Home;
