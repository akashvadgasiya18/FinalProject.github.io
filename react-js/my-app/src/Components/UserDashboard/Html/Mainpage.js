import Header from "../../AdminDashboard/Html/Header";
import React from "react";
import Approute2 from "./Approute2";
import Slidebar from './Slidebar'
import '../../AdminDashboard/css/Header.css'
import Footers from "../../AdminDashboard/Html/Footers";

const Mainpage = () => {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Slidebar />
        <Approute2 />
      </div>
      <Footers />
    </div>
  );
};

export default Mainpage;
