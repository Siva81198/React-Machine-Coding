import React, { useState } from "react";
import tabData from "./data.js";

const TabComponent = ({ tabDetails: { id, tabName, tabContent } , handleClick, selectedTab}) => {
    console.log(selectedTab);

  return (
    <div className="sub-cont" style={{}}>
      <div className="tabName" style={{border: "1px solid red", padding:"10px", cursor:"pointer"}} onClick={()=> handleClick(id)}>{tabName}</div>
      {
          selectedTab == id && <div className="tabContent" style={{alignContent:"center"}}>{tabContent}</div>
      }
    </div>
  );
};

const Tab = () => {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleClick = (id)=>{
        setSelectedTab(id);
    }

  return (
    <div className="main-cont" style={{display:"flex", justifyContent:"center", border:"1px solid blue"}}>
      {tabData.map((tabDetails) => (
        <TabComponent key={tabDetails.id} tabDetails={tabDetails} handleClick={handleClick} selectedTab={selectedTab}/>
      ))}
    </div>
  );
};

export default Tab;