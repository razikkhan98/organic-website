import React from "react";
import Jar from "../img/jar.png";
import Icon1 from "../img/WhuChooseUS/icon1.png";
import { Container, Row, Col } from "react-bootstrap";
const ChooseUs = () => {
  const InfoWithIcon = () => {
    {
      img: Icon1;
      title: "";
    }
  };
  return (
    <>
      {/* Why choose us section start */}
      <Container>
        <div className="WhyChooseUs">
          <div>
            <Row>
              <Col>
                <img src={Jar} className="WhyChooseUs-leftimg" />
              </Col>
              <Col>
                <div className="WhyHeading">Why Choose Us ?</div>
              </Col>
              <Col>
                <img src={Jar} className="WhyChooseUs-text" />
              </Col>
            </Row>
          </div>
          <Row>
            <p className="WhyChooseUs-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              accusamus reprehenderit, magni sequi eaque nisi magnam sint
              explicabo quod aperiam?
            </p>
          </Row>
        </div>
      </Container>
      {/* Why choose us section end */}
    </>
  );
};
export default ChooseUs;
