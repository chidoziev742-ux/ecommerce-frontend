import React from "react";
import { Link } from "react-router-dom";

import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
     <Link to={`/product/${props.id}`}>
  <img src={props.image} alt={props.name} />
</Link>

      <p>{props.name}</p>

      <div className="items-prices">
        <div className="items-price-new">₦{props.new_price}</div>
        <div className="items-price-old">₦{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
