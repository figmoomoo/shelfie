import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component{
    constructor(){
        super()

        this.state={
            name: "",
            price: 0,
            image_url:"",
            edit: false
        }
    }

    componentDidMount(){
        if(this.props.match.params.id){
            this.setState({edit: true})
        }
    }

    handleChangeName = (value) => {
        this.setState({name: value})
    }
    handleChangePrice = (value) => {
        this.setState({price: value})
    }
    handleChangeImage = (value) => {
        this.setState({image_url: value})
    }

    handleReset = () => {
        this.setState({
            name: "",
            price: 0,
            image_url: ""
        })
    }

    addItem = () => {
        const newItem = {
			name: this.state.name,
			price: this.state.price,
			image_url: this.state.image_url
		};

		axios.post('/api/inventory', newItem).then(() => {
			this.props.history.push("/")
		});
    }

    saveItem = () => {
        const savedItem = {
            name: this.state.name,
            price: this.state.price,
            image_url: this.state.image_url
        }

        axios.put(`/api/inventory/${this.props.match.params.id}`, savedItem).then(() => {
            this.props.history.push("/")
        })
    }

    render(){
        return (
            <div>
                <img
					className="image-preview"
					src={
						this.state.image_url === '' ? (
							'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg'
						) : (
							this.state.image_url
						)
					}
					alt={this.state.name}
				/>
                <div className="input-section">
                    <div>Image URL:</div>
                    <input value={this.state.image_url} onChange={(e) => this.handleChangeImage(e.target.value)}/>
                    <div>Product Name:</div>
                    <input value={this.state.name} onChange={(e) => this.handleChangeName(e.target.value)}/>
                    <div>Price:</div>
                    <input value={this.state.price} onChange={(e) => this.handleChangePrice(e.target.value)}/>
                </div>
                <div className="form-buttons">
                    <button onClick={this.handleReset}>Cancel</button>
                    {this.state.edit ? <button onClick={this.saveItem}>Save</button> : <button onClick={this.addItem}>Add to Inventory</button>}
                </div>
            </div>
        )
    }
}

export default Form;