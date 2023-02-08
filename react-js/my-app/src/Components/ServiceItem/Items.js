import React from 'react'
import { Container, Row, Col } from "reactstrap";
import Data1 from "../../Components/ServiceItem/Data1"
import ServiceItems from "../../Components/ServiceItem/ServiceItems"
import Heading from '../Common/Heading';


const Items = () => {
  // console.log(Data1);
  return (
    <>
    
    <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              {/* <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2> */}
                <Heading title="Different type of Services" subtitle=""/>
            </Col>

            {Data1.serviceData.map((item,index) => (
              <ServiceItems item={item} key={index} img={item.img} s_name={item.s_name} price={item.price} likes={item.likes} url={item.url}/>
            ))}
          </Row>
        </Container>
      </section>
      </>
  )
}

export default Items
