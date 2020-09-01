import React, { Component } from "react";
import data from "../data.json";
import Banner from "../components/Banner";
import Product from "../components/Product";
import Notification from "../components/Notification";
import Layout from "../components/Layout";
import $ from "jquery";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  show() {
    let container = document.getElementsByClassName("notification-container");
    container[0].style.display = "block";
    $(".notification-container").fadeOut(2000, "linear");
  }

  render() {
    return (
      <Layout>
        <Banner />
        <div className="products-container">
          <h2>DISCOVER <br/>
            OUR PRODUCT
          </h2>
          <div className="products">
            {data.products.map((product, index) => {
              return (
                <div className="product" key={index}>
                  <img src={product.image} alt="" />
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">{product.price}</p>
                  <button
                    onClick={() => {
                      this.props.parentCallback({ ...product });
                      this.show();
                    }}
                    className="add-to-cart"
                  >
                    Add To Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <Notification />
      </Layout>
    );
  }
}

export default Home;
