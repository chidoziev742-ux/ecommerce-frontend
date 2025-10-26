import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  if (!cartItems || !all_product) return null;

  // Calculate totals
  const subtotal = all_product.reduce((acc, product) => {
    return acc + product.new_price * (cartItems[product.id] || 0);
  }, 0);

  return (
    <div className="cartitems">
     
      <div className="cartitems-header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-row">
                <img
                  src={product.image}
                  alt={product.name}
                  className="cartitems-product-img"
                />
                <p>{product.name}</p>
                <p>₦{product.new_price.toLocaleString()}</p>
                <button className="cartitems-quantity">
                  {cartItems[product.id]}
                </button>
                <p>₦{(product.new_price * cartItems[product.id]).toLocaleString()}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt="remove"
                  className="cartitems-remove-icon"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* ---------- CART TOTALS ---------- */}
      <div className="cartitems-summary">
        <div className="cartitems-total">
          <h2>Cart Totals</h2>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>₦{subtotal.toLocaleString()}</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item cartitems-grandtotal">
            <h3>Total</h3>
            <h3>₦{subtotal.toLocaleString()}</h3>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
        
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
