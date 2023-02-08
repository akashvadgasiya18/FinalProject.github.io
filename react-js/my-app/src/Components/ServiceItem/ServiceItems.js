import React from "react";
import { Col } from "reactstrap";
import "../../Components/ServiceItem/service-item.css";
// import ServicePage from "../ServicePages/ServicePage";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart';

const ServiceItems = (props) => {
  // const { url, imgUrl, model, service_Name, likes, price, item } = props.item;

  const { addItem } = useCart();

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <Link to={props.url}>
            <img src={props.img} alt="" className="w-100" />
          </Link>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{props.s_name}</h4>
          <h6 className="rent__price text-center mt-">
            Rs. {props.price}.00{" "}
            <span style={{ fontFamily: "Poppins", fontWeight: "500" }}>
              / Day
            </span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              {/* {review} */}
              {props.model}
            </span>
            <span
              className=" d-flex align-items-center gap-1"
              style={{ fontFamily: "Poppins", fontWeight: "500" }}
            >
              <i class="fa-solid fa-heart"></i>
              {props.likes}
            </span>
            {/* <span className=" d-flex align-items-center gap-1">
                            <i class="ri-timer-flash-line"></i> {speed}
                        </span> */}
          </div>

          <button className=" w-100 car__item-btn car__btn-rent" onClick={()=>addItem(props.item)}>
            <i className="fa-solid fa-shopping-cart" style={{ marginRight:'10px'}}></i>Add to cart
          </button>

          <Link to={props.url}><button className=" w-100 car__item-btn car__btn-details">
           <i className="fa-solid fa-eye" style={{ marginRight:'5px'}}></i> Preview
          </button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ServiceItems;
