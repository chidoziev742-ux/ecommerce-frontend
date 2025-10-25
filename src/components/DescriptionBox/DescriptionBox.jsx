import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box descriptionbox-nav-box-fade">
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-content">
        <p>
          An e-commerce website is an online platform where businesses sell
          products or services directly to consumers over the internet. It
          functions as a digital storefront.
        </p>
        <p>
          🛒 Browse products or services through searchable catalogs
          <br />
          🧺 Add items to a shopping cart and manage selections
          <br />
          💳 Make secure payments via integrated payment gateways
          <br />
          📦 Track orders and manage deliveries without visiting a physical
          store
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
