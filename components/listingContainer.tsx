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
import Listing from "./listing";

const cards = [
  {
    title: "Card 1",
    description:
      "This is a newly built 5 Bedroom Duplex fit for a family of 5 in a serene, secured and gated estate.",
    images: Img1,
    location: { name: "Dallas", label: "Texas" },
    rating: 4.9,
    price: 200000,
  },
  {
    title: "Card 2",
    description: "Description for Card 2",
    images: Img2,
    location: { name: "Location 2", label: "none" },
    rating: 4.9,
    price: 200000,
  },
  {
    title: "Card 3",
    description: "Description for Card 3",
    images: Img3,
    location: { name: "Location 3", label: "none" },
    rating: 4.9,
    price: 200000,
  },
  {
    title: "Card 4",
    description: "Description for Card 4",
    images: Img4,
    location: { name: "Location 3", label: "none" },
    rating: 4.9,
    price: 200000,
  },
  // Add more cards as needed
];

const ListingContainer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {cards.map((card) => {
        return (
          <Listing
            rating={card.rating}
            key={card.title}
            image={card.images}
            title={card.title}
            location={card.location}
            description={card.description}
            price={card.price}
          />
        );
      })}
    </div>
  );
};

export default ListingContainer;
