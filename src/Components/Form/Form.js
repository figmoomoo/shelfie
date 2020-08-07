import React, {Component} from 'react';

class Form extends Component{
    constructor(){
        super()

        this.state={
            name: "",
            price: 0,
            imgurl:""
        }
    }

    handleChangeName = (value) => {
        this.setState({name: value})
    }
    handleChangePrice = (value) => {
        this.setState({price: value})
    }
    handleChangeImage = (value) => {
        this.setState({imgurl: value})
    }

    handleReset = () => {
        this.setState({
            name: "",
            price: 0,
            imgurl: ""
        })
    }

    render(){
        return (
            <div>
                <input value={this.state.imgurl} onChange={(e) => this.handleChangeImage(e.target.value)}/>
                <input value={this.state.name} onChange={(e) => this.handleChangeName(e.target.value)}/>
                <input value={this.state.price} onChange={(e) => this.handleChangePrice(e.target.value)}/>
                <button onClick={this.handleReset}>Cancel</button>
                <button >Add to Inventory</button>
            </div>
        )
    }
}

export default Form;