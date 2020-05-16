import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Produck</div>

      <div className="header-block">Description</div>

      <div className="header-block">Quantity</div>

      <div className="header-block">Price</div>

      <div className="header-block">Remove</div>
    </div>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
