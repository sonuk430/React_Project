import "./tabs.css";

import { useState } from "react";
import Button from "./components/Button.jsx";
import tablist from "./data/tablist.js";

export const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Componet = tablist[selectedTab].component;
  //   console.log(Componet);

  //   console.log(Componet);

  function handleSelectedTab(id) {
    return () => {
      setSelectedTab(id);
    };
  }

  return (
    <>
      <div className="nav">
        {tablist.map((tab) => (
          <Button
            lable={tab.lable}
            key={tab.id}
            onClick={handleSelectedTab(tab.id)}
            active={tab.id === selectedTab}
          />
        ))}
      </div>
      <div>
        <Componet />
      </div>
    </>
  );
};

export default Tabs;
