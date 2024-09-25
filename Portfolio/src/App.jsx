import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { OverView } from "./Components/OverView";
import { Projects } from "./Components/Projects";
import { Tsparticl } from "./Components/Tsparticl";

function App() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden">
        <div className="absolute w-screen">
          <Navbar />
        </div>

        <div className="min-h-screen">
          <div className="absolute">
            <Tsparticl />
          </div>

          <div className="relative">
            <About />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col relative bg-white">
          <OverView />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
