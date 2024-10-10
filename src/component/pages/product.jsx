import React from "react";
import Image from ".././img/product.png";

const Product = () => {
    const data = [
        {
            text : "Pure Cow Ghee",
        },
        {
            text : "Pure Cow Ghee",
        },
        {
            text : "Pure Cow Ghee",
        },
        {
            text : "Pure Cow Ghee",
        },
    ]
  return (
    <>
      <div className="product bg-brown">
        <div className="container border border-black py-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 border border-black d-flex align-item-center justify-content-center">
              <div className="product-card border border-black rounded">
                <div className="product-card-img ">
                  <img src={Image} alt="" className="border rounded"/>
                </div>

                <div className="product-card-content p-2 d-flex align-items-end justify-content-end">
                  <button className="product-card-btn px-2 rounded-pill fs-5 ">
                    Order
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 border border-black ">
            {data.map((item, index) => (
              <div className="product-content mt-3 pt-3 d-flex justify-content-center">
                <p className="border border-black rounded-pill p-1 w-75">{item.text} </p>
              </div>
            ))}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
