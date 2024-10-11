import React from "react";
import Jar from "../img/WhyChooseUs/jar.png";
import Icon1 from "../img/WhyChooseUs/icon1.png";
import Icon2 from "../img/WhyChooseUs/icon2.png";
import Icon3 from "../img/WhyChooseUs/icon3.png";
import Icon4 from "../img/WhyChooseUs/icon4.png";
import Icon5 from "../img/WhyChooseUs/icon5.png";
import { Container, Row, Col } from "react-bootstrap";
const ChooseUs = () => {
  const InfoWithIcon = [
    {
      img: Icon1,
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.",
    },
    {
      img: Icon2,
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.",
    },
    {
      img: Icon3,
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.",
    },
    {
      img: Icon4,
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.",
    },
    {
      img: Icon5,
      title:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, odit.",
    },
  ];
  return (
    <>
      {/* Why choose us section start */}
      <Container>
        <div className="WhyChooseUs p-3">
          <div>
            <Row>
              <Col>
                <img src={Jar} className="h-75" />
              </Col>
              <Col>
                <div className="WhyHeading mt-5">Why Choose Us ?</div>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                  accusamus reprehenderit, magni sequi eaque nisi magnam sint
                  explicabo quod aperiam?
                </p>
              </Col>
              <Col>
                <img src={Jar} className="h-75" />
              </Col>
            </Row>
          </div>
          <Row></Row>
          <Row className="mt-3">
            {InfoWithIcon.map((item, index) => (
              <Col key={index} className="mt-3">
                <img src={item.img} className="WhyChooseUs-icons" />
                <Row>
                  <div className="mt-3">{item.title}</div>
                </Row>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      {/* Why choose us section end */}
    </>
  );
};
export default ChooseUs;
