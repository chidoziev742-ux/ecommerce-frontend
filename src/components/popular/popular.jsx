import React, { useEffect, useState } from "react";
import "./popular.css";

import Item from "../item/item";
import { data } from "react-router-dom";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]); 

 useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())  //  parse JSON
      .then((data) => setPopularProducts(data))
      .catch((err) => console.error("Error fetching popular products:", err));
  }, []);
  
 
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((product, index) => (
          <Item
            key={index}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
