import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <a href="http://localhost:3000/"><img src="images/logo.png" alt=""/></a>
        <Link to="/" className="navbar-item">
          PRODUCTS
        </Link>
        <Link to="/About" className="navbar-item">
          ABOUT
        </Link>
        <Link to="/ContactUs" className="navbar-item">
          CONTACT
        </Link>
        <Link to="/Cart" className="navbar-item cart-icon">
          <span>CART</span>
          <img src="/images/supermarket.svg" alt="" />
        </Link>
      </div>
    );
  }
}

export default Navigation;
