import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { response } from "express";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    this.getItem;
  }

  componentDidUpdate() {
    this.getItem;
  }

  getItem() {
    axios.get("/api/inventory").then((response) => {
      this.setState({ Inventory: response.data });
    });
  }

  render() {
    const list = this.state.inventory.map((product, index) => {
      return <Product 
        />;
    });
  }
}

export default Dashboard;
