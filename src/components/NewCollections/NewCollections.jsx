import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../item/item";

const NewCollections = () => {
  // State declaration
  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((response) => response.json())
      .then((data) => setNew_collection(data))
      .catch((err) => console.error("Error fetching new collections:", err));
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {Array.isArray(new_collection) &&
          new_collection.map((product) => (
            <Item
              key={product.id}
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

export default NewCollections;
