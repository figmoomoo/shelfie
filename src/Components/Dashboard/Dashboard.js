import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }

  render() {
    const list = this.state.inventory.map((product, index) => {
      return (
        <Product 

        />
      )
    });
  }
}

export default Dashboard;
