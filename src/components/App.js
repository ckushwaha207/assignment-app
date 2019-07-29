import React, { Component } from "react";
import BookList from "./BookList";
import Header from "./Header";
import { Route } from "react-router-dom";
import { withApollo } from 'react-apollo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      quantity: 1
    };

    this.updateCartListener = this.updateCartListener.bind(this);
  }

  updateCartListener(cart) {
    console.log("App cart: ", cart)
    this.setState({
      cart: cart
    });
  }

  checkProduct(productId) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productId;
    });
  }

  render() {
    console.log("App cart 2", this.state.cart);
    return (
      <div>
        <main>
          <div className="container">
            <Header cart={this.state.cart} />

            <Route path="/" exact />
            <Route path="/books" exact component={BookList} />
            <Route path="/books/:id" render={(props) => <BookList {...props} updateCartListener={this.updateCartListener}/> } />
          </div>
        </main>
      </div>
    );
  }
}

export default withApollo(App);
