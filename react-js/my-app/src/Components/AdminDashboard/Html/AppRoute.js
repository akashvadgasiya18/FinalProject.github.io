import React from 'react'
import Customer from "./Customer";
import Dash from "./Dash";
import Order from "./Order";
import { Route, Routes } from "react-router-dom";
import Transactions from './Transactions';

const AppRoute = () => {
  return (
    <div className='PageContent'>
       <Routes>
          <Route exact path="/dash" element={<Dash />}></Route>
          <Route exact path="/orders" element={<Order />}></Route>
          <Route exact path="/customers" element={<Customer />}></Route>
          <Route exact path="/transaction" element={<Transactions />} />
        </Routes>
    </div>
  )
}

export default AppRoute
