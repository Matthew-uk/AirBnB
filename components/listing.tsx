import Image from "next/image";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

interface ListingProps {
  title: string;
  image: any;
  location: any;
  rating: number;
  description: string;
  price: number;
}

const Listing: React.FC<ListingProps> = ({
  title,
  image,
  location,
  rating,
  description,
  price,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className=" relative overflow-hidden rounded-xl aspect-square">
          <Image
            src={image}
            alt="Listing Image"
            className="object-cover h-full w-full group-hover:scale-110 transition-all duration-300"
          />
          <div className="absolute top-3 right-3">
            <IoHeartOutline size={25} className="text-white" />
          </div>
        </div>
        <div className="text-sm flex flex-col gap-2">
          <div className="flex flex-row justify-between items-center">
            <h2 className="font-medium">
              {location?.name}, {location?.label}
            </h2>
            <p className="flex flex-row gap-2 items-center justify-center">
              <FaStar />
              {rating}
            </p>
          </div>
          <h2 className="text-neutral-500">{description}</h2>
          <h2 className="underline font-medium">${price.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  );
};

export default Listing;
