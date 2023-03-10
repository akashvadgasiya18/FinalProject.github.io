import React, { useState } from 'react'
import '../../Pages/Service/service.css'
import { ServiceData, ServiceData2, ServiceData3, ServiceData4 } from './ServiceData'
import Footer from '../../Components/Footer/Footer'
import ImageBanner from '../../Components/Common/ImageBanner'
// import { Link } from 'react-router-dom'
// import preview from '../../ServicePages/Preview'
// import Navbar from '../../Components/Navbar/Navbar'

const Service = () => {

  const [detail] = useState(ServiceData);
  const [detail2] = useState(ServiceData2);
  const [detail3] = useState(ServiceData3);
  const [detail4] = useState(ServiceData4);
  return (
    <>
      {/* <Navbar /> */}
      <ImageBanner title="Service Page" />

      {/* ------------------------------ section -1 ---------------------------------- */}

      <section className="services">
        <div className="service-heading">
          <span>Categories of Services</span>
          <h2>Medical Related Service</h2>
        </div>

        <div className="service-row">
          {
            detail4.map((detail4) => {
              return (
                <div className="service-column">
                  <div className="service-cards">
                    <div className="service-thumb">
                      <img src={detail4.image} alt="i1" />
                    </div>

                    <div className="service-info">
                      <h3>{detail4.name}</h3>
                      <p>{detail4.info}</p>
                    </div>
                  </div>
                </div>
              )
            })
          };

        </div>
      </section>



      <section className="services">
        <div className="service-heading">
          {/* <span>Categories of Services</span> */}
          <h2 style={{ marginTop:'-3rem'}}>Cleaning & Pest Control</h2>
        </div>

        <div className="service-row">
          {
            detail.map((detail) => {
              return (
                <div className="service-column">
                  <div className="service-cards">
                    <div className="service-thumb">
                      <img src={detail.image} alt="i1" />
                    </div>

                    <div className="service-info">
                      <h3>{detail.name}</h3>
                      <p>{detail.info}</p>
                    </div>
                  </div>
                </div>
              )
            })
          };

        </div>
      </section>




      {/* ------------------------------ section - 2 ---------------------------------- */}

      <section className="services">
        <div className="service-heading">
          {/* <span>Categories of Services</span> */}
          <h2 style={{ marginTop:'-3rem'}}>Home Repairs</h2>
        </div>

        <div className="service-row">
          {
            detail2.map((detail2) => {
              return (
                <div className="service-column">
                  <div className="service-cards">
                    <div className="service-thumb">
                      <img src={detail2.image} alt="i1" />
                    </div>

                    <div className="service-info">
                      <h3>{detail2.name}</h3>
                      <p>{detail2.info}</p>
                    </div>
                  </div>
                </div>
              )
            })
          };

        </div>
      </section>



      {/* ------------------------------ section -3  ---------------------------------- */}

      <section className="services">
        <div className="service-heading">
          {/* <span>Categories of Services</span> */}
          <h2 style={{ marginTop:'-3rem'}}>Saloon & spa services</h2>
        </div>

        <div className="service-row">
          {
            detail3.map((detail3) => {
              return (
                <div className="service-column">
                  <div className="service-cards">
                    <div className="service-thumb">
                      <img src={detail3.image} alt="i1" />
                    </div>

                    <div className="service-info">
                      <h3>{detail3.name}</h3>
                      <p>{detail3.info}</p>
                    </div>
                  </div>
                </div>
              )
            })
          };

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Service
