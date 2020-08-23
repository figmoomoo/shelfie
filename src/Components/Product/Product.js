import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

function Product(props){
    console.log(props.product)
    return (
        <div>
            <h2>{props.product.name}</h2>
            <h2>{props.product.price}</h2>
            <img src={props.product.img} style={{height:100}}/>
            <button onClick={() => {props.deleteItem(props.product.id)}}>Delete</button>
            <button onClick={() => {props.history.push(`/edit/${props.product.id}`)}}>Edit</button>
        </div>
    )
}

export default withRouter(Product);