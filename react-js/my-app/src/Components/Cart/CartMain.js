import React from "react";
import { useCart } from "react-use-cart";
import "react-bootstrap";
// import { Link } from "react-router-dom";

const CartMain = () => {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <h1
        className="text-center"
        style={{
          fontFamily: "Poppins",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15rem",
          fontSize: "4rem",
          fontWeight: "700",
          color: "darkblue",
        }}
      >
        Your cart is Empty
      </h1>
    );
  return (
    <>
      <section className="py-5 container">
        {/* <div className="row justify-content-center cart-table">
          <div
            className="col-12">
            <h4>
              Cart ({totalUniqueItems}) Total Items : ({totalItems})
            </h4>
            <table className="table">
             
            </table>
            <table className="table table-light table-hover">
            <tr style={{ color:'black', fontFamily:'Poppins', fontWeight:'bold',fontSize:'20px'}}>
                <td>Images</td>
                <td>Service Name</td>
                <td>Prices(per)</td>
                <td>Quantity</td>
                <td>Edit</td>
              </tr>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="" style={{ height: "6rem" }} />
                      </td>
                      <td>{item.s_name}</td>
                      <td>{item.price}</td>
                      <td>Quantity : {item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto my-5">
            <h3>Total Price : ₹ {cartTotal}</h3>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-danger m-2 my-5"
              onClick={() => emptyCart()}
            >
              clear Cart
            </button>
            <button className="btn btn-primary m-2 my-5"> Buy Now</button>
          </div>
        </div> */}

        <div className="container">
          <div className="py-4">
            <h3 class="mb-3 text-center">
              Cart ({totalUniqueItems}) Total Items : ({totalItems})
            </h3>
            <table class="table border shadow">
              <thead class="thead-primary">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Price(per)</th>
                  <th scope="col">Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="" style={{ height: "6rem" }} />
                      </td>
                      <td>{item.s_name}</td>
                      <td>₹ {item.price}</td>
                      <td>Quantity : {item.quantity}</td>
                      <td>
                        <button
                          className="btn btn-info m-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info m-1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger m-1"
                          onClick={() => removeItem(item.id)}
                        >
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto my-5">
            <h3>Total Price : ₹{cartTotal}</h3>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-danger m-2 my-3"
              onClick={() => emptyCart()}
            >
              clear Cart
            </button>
            <button className="btn btn-primary m-2 my-3"> Buy Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartMain;
