import React from "react";
import Card from "./card";
import Img1 from "@/images/nitronft.png";
import Img2 from "@/images/nitronft1.png";
import Img3 from "@/images/nitronft2.png";
import Img4 from "@/images/nitronft3.png";
import Img5 from "@/images/nitronft4.png";
import Img6 from "@/images/nitronft5.png";
import Img7 from "@/images/nitronft6.png";
import Img8 from "@/images/nitronft7.png";
import Img9 from "@/images/nitronft8.png";

const cards = [
  {
    title: "Card 1",
    description: "Description for Card 1",
    images: [Img1, Img2, Img3, Img4],
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    images: [Img5, Img6, Img7, Img8, Img9],
  },
  // Add more cards as needed
];

const CardContainer = () => {
  return (
    <div>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          images={card.images}
        />
      ))}
    </div>
  );
};

export default CardContainer;
