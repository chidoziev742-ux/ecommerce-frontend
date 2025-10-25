import React from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections"; // make sure this file exports an array
import Item from "../item/item";
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">

        
        {new_collection.map((product, index) => (
          <Item
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
