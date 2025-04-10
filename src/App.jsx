import { useState } from "react";
import clsx from "clsx"; 
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./Nav";
import Home from "./screens/Home";
import Destination from "./screens/Destination";
import Crew from "./screens/Crew";
import Technology from "./screens/Technology";



const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3, ease: "easeIn" } },
};
function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "tab1":
        return <Home setActiveTab={setActiveTab} />;
      case "tab2":
        return <Destination />;
      case "tab3":
        return <Crew />;
      case "tab4":
        return <Technology />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  const backgroundClass = clsx({
    "bg-home": activeTab === "tab1",
    "bg-destination": activeTab === "tab2",
    "bg-crew": activeTab === "tab3",
    "bg-tech": activeTab === "tab4",
  });


  return (
    <main>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <section className={`body bg-no-repeat bg-cover ${backgroundClass}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );

  // return (
  //   <main>
  //     <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
  //     <section className={`body bg-no-repeat bg-cover ${backgroundClass}`}>{renderActiveTab()}</section>
  //   </main>
  // );
}

export default App;
