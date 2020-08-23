import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem() {
    axios.get("/api/inventory").then((response) => {
      console.log(response.data)
      this.setState({ inventory: response.data });
    });
  }

  deleteItem = (id) => {
    axios.delete(`/api/inventory/${id}`).then(()=>{
      this.getItem();
    })
  }

  render() {
    const list = this.state.inventory.map((product, index) => {
      return <Product product={product} deleteItem={this.deleteItem}/>;
    });
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default Dashboard;
