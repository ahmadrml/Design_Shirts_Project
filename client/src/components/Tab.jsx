import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  const activeStyles = isFilterTab && isActiveTab 
  ? {backgoundColor: snap.color , opacity: 0.5}
  : {backgoundColor: 'transparent' , opacity: 1}

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? "rounded-full" : "rounded-4"}`}
      onClick={handleClick}
    >
      <img src={tab.icon} alt={tab.name} className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12'}`}/>
    </div>
  );
};

export default Tab;
