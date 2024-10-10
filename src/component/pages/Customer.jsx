import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Carousel, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap Components
import Team1 from "../img/costumer/costumer-1.png";
import Team2 from "../img/costumer/costumer-2.png";

const Customer = () => {
  const CostumerImgfirst = [
    {
        name: "Basily",
        description:
          "Great service, always get helpful and quick responses & I’m impressed with the quality of the Chicken & Mutton.",
        img: Team1,
        stars: 3.5,
      },
      {
        name: "Abhishek",
        description:
          "As a conscientious consumer, I appreciate Super Chicks commitment to ethical sourcing practices.",
        img: Team2,
        stars: 4.0,
      },
      {
        name: "John Doe",
        description:
          "The service is excellent! Always fresh and delivered on time.",
        img: Team1,
        stars: 5.0,
      },
      {
        name: "Jane Smith",
        description:
          "I love how fresh the produce is. I have been a loyal customer for years.",
        img: Team2,
        stars: 4.5,
      },
      // Add more objects here
      {
        name: "New Customer",
        description: "This is a new customer review.",
        img: Team1,
        stars: 4.0,
      },
      {
        name: "Razik",
        description: "This is a new customer review.",
        img: Team1,
        stars: 4.0,
      },
  ];

  // Function to render stars based on the number
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {Array(fullStars).fill(<FaStar key={Math.random()} />)}
        {halfStar && <FaStarHalfAlt />}
        {Array(emptyStars).fill(<FaRegStar key={Math.random()} />)}
      </>
    );
  };

  // Function to group the items into pairs of two
  const groupCustomersInPairs = (array) => {
    const grouped = [];
    for (let i = 0; i < array.length; i += 2) {
      grouped.push(array.slice(i, i + 2));
    }
    return grouped;
  };

  return (
    <div>
      {/* Customer Section Start */}
      <section id="section-padding">
        <Container>
          <div className="heading-section mb-5 text-center">
            <h3><span>Hear from our </span></h3>
            <h3>Happy Customers</h3>
          </div>

          {/* React Bootstrap Carousel */}
          <Carousel interval={2000}>
            {groupCustomersInPairs(CostumerImgfirst).map((pair, index) => (
              <Carousel.Item key={index}>
                <Row className="justify-content-center">
                  {pair.map((link, idx) => (
                    <Col md={6} sm={12} key={idx} className="mb-3">
                      <div className="costumer-single position-relative costumer-card">
                        <div className="costumer-content d-flex align-items-center">
                          <div className="costumer-author-img">
                            <img
                              src={link.img}
                              alt={`${link.name}'s profile`}
                              className="img-fluid"
                            />
                          </div>
                          <div className="costumer-author-info ms-3">
                            <h4>{link.name}</h4>
                            <div className="costumer-rate">
                              {renderStars(link.stars)}
                            </div>
                          </div>
                        </div>
                        <div className="costumer-quote mt-3">
                          <p>{link.description}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
      {/* Customer Section End */}
    </div>
  );
};

export default Customer;
