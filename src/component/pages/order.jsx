import React, { useState } from "react";
import Image1 from "../img/product.png";
import Image2 from "../img/testimonial-2.jpg";
import Image3 from "../img/testimonial-3.jpg";
import Image4 from "../img/testimonial-4.jpg";
import { FaCircle } from "react-icons/fa6";

const Order = () => {
  const [selectedImage, setSelectedImage] = useState(Image1); // Default selected image
  const [checkedItems, setCheckedItems] = useState([false, false]); // State for checkboxes

  const images = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
    { image: Image4 },
  ];

  const data = [
    {
      liter: "500 ml",
      batch: "SKU: 1400026",
      price: "₹ 715.00",
      tax: "(Inc of All Taxes)",
      inr: "INR 1.3/ml",
    },
    {
      liter: "1 ltr",
      batch: "SKU: 1400126",
      price: "₹ 1400.00",
      tax: "(Inc of All Taxes)",
      inr: "INR 1.3/ml",
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCheckboxChange = (index) => {
    const newCheckedItems = checkedItems.map(
      (item, idx) => (idx === index ? !item : false) // Toggle current checkbox and uncheck others
    );
    setCheckedItems(newCheckedItems);
  };

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="order pt-5 pb-5 border border-black">
        <div className="container pt-2 pb-2">
          <div className="row">
            <div className="col-lg-2 col-md-4 ">
              {images.map((item, index) => (
                <div key={index}>
                  <a
                    className="select-order-img p-2 d-flex justify-content-center"
                    onClick={() => handleImageClick(item.image)}
                  >
                    <img src={item.image} alt="" />
                  </a>
                </div>
              ))}
            </div>
            <div className="col-lg-4 col-md-6 border border-black">
              <div className="order-img mt-5">
                <img src={selectedImage} alt="Selected" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="order-section">
                <h4>Certified Organic Cow Ghee</h4>
                <p className="mt-3">
                  <b>Brand</b>: Organic India
                </p>
                <p className="fw-bold">
                  <b className="px-2 pb-1 border border-success me-2">
                    <FaCircle />
                  </b>
                  This is a Vegetarian product
                </p>
                <p>
                  <b>Return Policy</b>: 7 Days Replacement Policy. Read More
                </p>
                <p className="fw-bold">Available Offers:</p>
                <p className="lh-1">
                  Enjoy 10% off*. Min. Order 399/- Use Coupon Code:{" "}
                  <b>ORGANIC10</b> T&C
                </p>
                <p className="lh-1">
                  <b>Clearance Deal:</b> Flat 25% Off on Green Tea Favourites
                  Pack 25IB <b>BUY NOW</b> T&C
                </p>

                {/* <form id="newsletterForm" className="mt-2">
                  <input
                    type="text"
                    name="email"
                    placeholder="Check Delivery"
                    className="border rounded-pill py-1 px-2"
                  />
                  <button
                    type="submit"
                    form="newsletterForm"
                    className="border rounded-pill mx-1 p-2 bg-dark text-light"
                  >
                    Check Delivery
                  </button>
                </form> */}
                <p className="w-100 my-2 border border-secondary"></p>
                <p className="fw-bold">Select Variant</p>
                <div className="d-flex gap-3">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className={`order-card rounded ${
                        checkedItems[index] ? "highlight" : ""
                      }`}
                      onClick={() => handleCheckboxChange(index)}
                    >
                      <div className="order-card-head p-1 d-flex justify-content-between">
                        <p className="fw-bold text-light mt-2">{item.liter}</p>
                        <div className="form-check">
                          <input
                            className="form-check-input bg-success border border-success"
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleCheckboxChange(index)}
                            id={`flexCheckDefault${index}`}
                          />
                        </div>
                      </div>
                      <div className="order-card-price p-2">
                        <p>{item.batch}</p>
                        <h6>{item.price}</h6>
                        <p>{item.tax}</p>
                        <h6>{item.inr}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="count mt-2 d-flex align-items-center">
                  <p className="me-2 mt-2">Quantity:</p>
                  <button
                    onClick={decreaseCount}
                    className="count-section border border-black rounded-start"
                  >
                    -
                  </button>
                  <div className="count-section border border-black">
                    {" "}
                    {count}{" "}
                  </div>
                  <button
                    onClick={increaseCount}
                    className="count-section border border-black rounded-end"
                  >
                    +
                  </button>
                </div>
                
                  <input
                    type="text"
                    placeholder="Total Amount"
                    className="py-1 px-1 w-25 mt-2"
                  />
                
                <div className="mt-2">
                  <button className="py-3 px-5 text-uppercase bg-dark text-light">
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
