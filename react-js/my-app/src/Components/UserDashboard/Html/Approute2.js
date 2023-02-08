import React from 'react'
import { Route, Routes } from "react-router-dom";
import PassChange from '../Html/PassChange';
import Order from '../../AdminDashboard/Html/Order';
import Editprofile from './Editprofile';

const Approute2 = () => {
  return (
    <div className='PageContent'>
       <Routes>
          <Route exact path="/users" element={<Editprofile />} ></Route>
          <Route exact path="/userorders" element={<Order />}></Route>
          <Route exact path="/changePassword" element={<PassChange />}></Route>
        </Routes>
    </div>
  )
}

export default Approute2
