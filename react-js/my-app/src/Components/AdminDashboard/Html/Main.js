import Header from "./Header";
import React from "react";
import "../css/Header.css";
import Sidemenu from "./Sidemenu";
import Footers from "./Footers";
import AppRoute from "./AppRoute";
// import AppRoute from './AppRoute';


const Main = () => {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Sidemenu />
        <AppRoute />
      </div>
      <Footers />
    </div>
  );
};

export default Main;
