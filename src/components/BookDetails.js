import React, { Component } from "react";
import { withApollo, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CART_MUTATION = gql`
  mutation CartMutation($cartId: ID!, $productId: String!, $name: String!, $price: Float!, $quantity: Int!) {
    cart(cartId: $cartId, productId: $productId, name: $name, price: $price, quantity: $quantity) {
      id
      items {
        id
        productId
        name
        price
        quantity
      }
    }
  }
`

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInputQty: 1
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.updateBookQty = this.updateBookQty.bind(this);
  }

  handleAddToCart() {
    const book = this.props.book;
    let cartItem = {};
    cartItem.productId = book.id;
    cartItem.name = book.name;
    cartItem.price = book.price;
    cartItem.quantity = Number(this.state.bookInputQty);

    this.props.handleAddToCart(cartItem);
  }

  updateBookQty(evt) {
    this.setState({
      bookInputQty: evt.target.value
    });
  }

  render() {
    let book = this.props.book.id;
    return (
      <div id="book-details">
        <div className="container">
          <p>{book.name}</p>

          <input type="text" value={this.state.bookInputQty} onChange={this.updateBookQty} className="book-qty"></input>
          <Mutation mutation={CART_MUTATION} 
            variables={{
              cartId: "cjynyk728jupt0b99oyqdda9z", 
              productId: this.props.book.id, 
              name: this.props.book.name, 
              price: this.props.book.price, 
              quantity: Number(this.state.bookInputQty)}}
            update={(store, {data: {cart}}) =>
              this.props.updateCartAfterAddToCart(store, cart)
            }
          >
            {cartMutation => (
              <button className="btn btn-primary" onClick={cartMutation}> Add to Cart </button>
            )}      
          </Mutation>
        </div>
      </div>
    );
  }
}

export default BookDetails;
