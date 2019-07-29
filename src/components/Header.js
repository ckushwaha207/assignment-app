import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Cart from "./Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log("Props: ", props)
  }

  render() {
    console.log("Cart:", this.props.cart);
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/4.3/assets/brand/bootstrap-solid.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            ACME
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/books" className="nav-link">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Basket
                </Link>
              </li>
              <li className="nav-item">
                <Cart cart={this.props.cart} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
