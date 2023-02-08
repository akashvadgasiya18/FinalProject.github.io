import React from "react";
import { CartProvider } from "react-use-cart";
// import Navbar from "../Navbar/Navbar";
import CartMain from '../Cart/CartMain'
// import ServiceItems from "../../Components/ServiceItem/ServiceItems"

const Cart = () => {
  return (
    <>
      <CartProvider>
        {/* <Navbar /> */}
        {/* <ServiceItems /> */}
        <CartMain />
      </CartProvider>
    </>
  );
};

export default Cart;
