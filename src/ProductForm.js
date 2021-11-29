import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }
    }


    validate = () => {

        let name = this.state.product.name;
        let category = this.state.product.category;
        let price = this.state.product.price;
        let errors = {}

        if(name === "") {
            errors['name'] = "name is empty error"
            this.setState({errors:errors})
            return false
        }  
        if(category === "") {
            errors['category'] = "category is empty error"
            this.setState({errors:errors})
            return false
        }
        if(price === ""){
            errors['price'] = "price is empty error"
            this.setState({errors:errors})
            return false
        }
        return true;
    }

    handleSave = (e) => {

        if(this.validate()) {
            console.log("true")
            this.props.onSave(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            })
        }
        else{
            console.log(this.state)
        }

        e.preventDefault();
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        })
    }

    render() {
        return (
            <div>
                <h2>Add a new Product</h2>
                <div className="col-md-6">
                    <form> 
                        <fieldset>
                        <div className="form-group">
                            <label htmlFor="productName">Name</label>
                            <input className="form-control" id="productName" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <input className="form-control" id="productCategory" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price</label>
                            <input className="form-control" id="productPrice" type="number" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                        </div>
                    
                        <button className="btn btn-primary" type="button" onClick={this.handleSave}>Save</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm;