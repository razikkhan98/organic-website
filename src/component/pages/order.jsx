import React, { useState } from "react";
import Image1 from "../img/testimonial-1.jpg";
import Image2 from "../img/testimonial-2.jpg";
import Image3 from "../img/testimonial-3.jpg";
import Image4 from "../img/testimonial-4.jpg";

const Order = () => {
    const [selectedImage, setSelectedImage] = useState(Image1); // Default selected image

    const images = [
        { image: Image1 },
        { image: Image2 },
        { image: Image3 },
        { image: Image4 },
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <>
            <div className="order pt-5 pb-2 border border-black">
                <div className="container pt-5 pb-2 border border-black">
                    <div className="row">
                        <div className="col-lg-2">
                            {images.map((item, index) => (
                                <div>
                                <a
                                    key={index}
                                    className="select-order-img border p-2 border-black d-flex justify-content-center"
                                    onClick={() => handleImageClick(item.image)}
                                >
                                    <img src={item.image} alt="" />
                                </a>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-4">
                            <div className="order-img border border-black">
                                <img src={selectedImage} alt="Selected" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;
