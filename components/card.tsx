import React from "react";
import Slider from "react-slick";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  images: any[];
}

const Card: React.FC<CardProps> = ({ title, description, images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={300}
              height={200}
            />
          </div>
        ))}
      </Slider>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
