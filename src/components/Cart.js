import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Cart Detailssss", this.props.cart);
    let cartItems = this.props.cart.items || [];
    let totalQty = 0;
    if (cartItems.length > 0) {
      cartItems.forEach(item => {
        console.log("Item: ", item);
        totalQty = totalQty + Number(item.quantity);
      });
    }

    console.log("Cart Detailssss", totalQty);

    return <div className="nav-link">{totalQty}</div>;
  }
}

export default Cart;
