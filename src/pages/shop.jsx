import React from "react";
import Hero from "../components/hero/hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewCollections from "../components/NewCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
<NewCollections />
<NewsLetter />
      {/* You can add other homepage sections below */}
    </div>
  );
};

export default Shop;
