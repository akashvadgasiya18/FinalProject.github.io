import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import Registration1 from "./Components/Registration/Registration1";
import Login1 from "./Components/Login/Login1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import ChangePassword from "./Pages/ChangePassword";
// import Main from "./Components/AdminDashboard/Html/Main";
// import AppRoute from "./Components/AdminDashboard/Html/AppRoute";
import Main from "./Components/AdminDashboard/Html/Main";
// import Main from "./Components/AdminDashboard/Html/Main";
// import ServicePage from "./Components/ServicePages/ServicePage";
// import { BrowserRouter as Routes, Route } from "react-router-dom"
import Customer from './Components/AdminDashboard/Html/Customer'
import Dash from './Components/AdminDashboard/Html/Dash'
import Order from './Components/AdminDashboard/Html/Order'
import Mainpage from "./Components/UserDashboard/Html/Mainpage";

// import { Route,Routes,Router } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Router>

      
        
        <Navbar />
        {/* <SlideBar /> */}
        {/* <Footer /> */}

        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/service" element={<Service></Service>} />
          <Route exact path="/contact" element={<Contact></Contact>} />
          <Route exact path="/login" element={<Login1></Login1>} />
          <Route
            exact
            path="/registration"
            element={<Registration1></Registration1>}
          />
          <Route exact path="/dashboards/*" element={<Main />}/>
          <Route exact path="/profile/*" element={<Mainpage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
        </Routes>


        <Routes>
            <Route exact path="/dash" element={<Dash />}></Route>
            <Route exact path="/orders" element={<Order />}></Route>
            <Route exact path="/customers" element={<Customer />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
