import React from "react";
import ImageBanner from "../../Components/Common/ImageBanner";
import Footer from "../../Components/Footer/Footer";
import "../Contact/Contact.css"
// import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {
    return (
        <>
            {/* <Navbar /> */}
            <ImageBanner title="Contact Page"/>

            <section className="contact">
                <div className="contact-heading">
                    <h2>Let's get in touch</h2>
                </div>

                <div className="container1">
                    <div className="row">

                        <div className="column">
                            <div className="contact-widget">
                                <div className="contact-widget-item">
                                    <div className="icon1">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>

                                    <div className="text">
                                        <h5>Address</h5>
                                        <p>B/100, Margentina coloni, New york, United State</p>
                                    </div>
                                </div>

                                <div className="contact-widget-item">
                                    <div className="icon1">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>

                                    <div className="text">
                                        <h5>Contact Us</h5>
                                        <p>+123 456 7890</p>
                                    </div>
                                </div>

                                <div className="contact-widget-item">
                                    <div className="icon1">
                                        <i className="fa-solid fa-envelope" ></i>
                                    </div>

                                    <div className="text">
                                        <h5>Email</h5>
                                        <p>abcd123@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="contact-form">
                                <form action="" className="form1">
                                    <input type="text" placeholder="Name" className="input1" />
                                    <input type="email" placeholder="Email" className="input1"/>
                                    <textarea placeholder="Message.." className="msg1"></textarea>
                                    <button type="submit" className="site-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="map-column">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470026.9531784504!2d72.30024378288799!3d23.02063007751829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1673536876626!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="location-map">Maps</iframe>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <Footer></Footer>
        </>
    )
}

export default Contact; 