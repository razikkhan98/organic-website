import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLeaf,
  FaHandHoldingWater,
  FaSprayCan,
  FaFlask,
} from "react-icons/fa";

const ChooseUs = () => {
  const iconData = [
    {
      icon: <FaLeaf size={50} color="brown" />,
      title: "Sustainable Farming Techniques",
    },
    {
      icon: <FaHandHoldingWater size={50} color="brown" />,
      title: "Locally & Ethically Sourced",
    },
    {
      icon: <FaSprayCan size={50} color="brown" />,
      title: "Chemical & Pesticide-free",
    },
    { icon: <FaFlask size={50} color="brown" />, title: "Non-GMO Produce" },
  ];
  return (
    <>
      <Container className="py-5">
        {/* Header Section */}
        <div className="text-center mb-4 bg-success py-4 d-flex justify-content-evenly align-items-center">
          <div>
            <FaLeaf size={50} color="brown" />
          </div>
          <div>
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="lead py-4">
              By building a culture of sustainability and wholesome living, we
              strive for a healthier you
              <br /> and a healthier planet.
            </p>
          </div>
          <div>
            <FaLeaf size={50} color="brown" />
          </div>
        </div>

        {/* Icons and Descriptions */}
        <Row className="text-center py-4">
          {iconData.map((item, index) => (
            <Col lg={3} md={6} sm={12} key={index} className="mb-3">
              {item.icon}
              <h5 className="mt-3">{item.title}</h5>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Why choose us section end */}
    </>
  );
};
export default ChooseUs;
