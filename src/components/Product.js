import React, { Component } from "react";
import "./Product.css"

class Product extends Component {
  render() {
    const {product} = this.props;
    console.log(product)
    return (
      <div className="product">
        <img src={product.image} alt="" />
        <p className="product-title">{product.title}</p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    );
  }
}

export default Product;
