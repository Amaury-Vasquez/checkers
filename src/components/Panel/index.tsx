import React, { useState } from "react";
// import { FiSettings } from "react-icons/fi";
import { FcRules } from "react-icons/fc";

import { PanelContainer } from "./styles";
import { Navigation } from "../Navigation";
import { GameRules } from "../GameRules";
// import { GameSettings } from "../GameSettings";

export const Panel = () => {
  const list = [
    { name: "rules", component: GameRules, icon: FcRules },
    // { name: "settings", component: GameSettings, icon: FiSettings },
  ];
  const [activeTab, setActiveTab] = useState<{
    component: JSX.Element;
    name: string;
  }>({ component: <GameRules />, name: "rules" });
  return (
    <PanelContainer>
      <Navigation
        active={activeTab.name}
        list={list}
        callback={(component: JSX.Element, name: string) => {
          setActiveTab({ component, name });
        }}
      />
      {activeTab.component}
    </PanelContainer>
  );
};
