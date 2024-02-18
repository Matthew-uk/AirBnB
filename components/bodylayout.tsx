import React from "react";
import LayoutNav from "./layoutNav";
import CardContainer from "./cardsContainer";
import ListingContainer from "./listingContainer";

const BodyLayout = () => {
  return (
    <div className="md:px-8 px-2">
      <LayoutNav />
      <ListingContainer />
      {/* <CardContainer /> */}
    </div>
  );
};

export default BodyLayout;
