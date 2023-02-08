import React from 'react'
import './Services.css'

import Footer from '../../Components/Footer/Footer'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { ServiceData1 } from '../ServicePages/ServiceData1'
// import Image from '../ServicePages/Image'

const ServicePage = () => {


    return (
        <>
            
            {ServiceData1.map((items, index) => (
                // const {title, price, rate, desc, img} = items;
                <div className="main-wrapper" key={index}>
                    <div className="container">
                        <div className="product-div">
                            <div className="product-div-left">
                                {/* <Image /> */}
                                <MDBCarousel showControls fade>
                                    <MDBCarouselItem
                                        className='w-100 h-[25rem] d-block'
                                        itemId={1}
                                        src={items.i1}
                                        alt='...'
                                    />
                                    <MDBCarouselItem
                                        className='w-100 h-[25rem] d-block'
                                        itemId={2}
                                        src={items.i2}
                                        alt='...'
                                    />
                                    <MDBCarouselItem
                                        className='w-100 h-[25rem] d-block'
                                        itemId={3}
                                        src={items.i3}
                                        alt='...'
                                    />
                                </MDBCarousel>

                            </div>
                            <div className="product-div-right">
                                <span className="product-name">{items.title}</span>
                                <span className="product-price">{items.price}</span>
                                <div className="product-rating">
                                    <span>{items.rate}</span>
                                    <span>(350 ratings)</span>
                                </div>
                                <p className="product-description">{items.desc}</p>
                                <div className="btn-groups">
                                    <button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart"></i>add to cart</button>
                                    <button type="button" className="buy-now-btn"><i className="fas fa-wallet"></i>buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <Footer />
        </>
    )
}


export default ServicePage
