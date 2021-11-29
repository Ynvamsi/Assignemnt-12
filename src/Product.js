import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let Product_List = {
    '1': {id: 1, category: 'Wearable Tech', price: '$149.99', name: 'Apple Watch Series 3'},
    '2': {id: 2, category: 'Wearable Tech', price: '$159.99', name: 'Apple AirPods Pro'},
    '3': {id: 3, category: 'Clothing', price: '$29.99', name: 'Shirt'},
    '4': {id: 4, category: 'Electronics', price: '$799.99', name: 'Apple Iphone 13'},
    '5': {id: 5, category: 'Vehicle', price: '$250.99', name: 'GoTrax Scooter'},
    '6': {id: 6, category: 'Electronics', price: '$399.99', name: 'Samsung Monitor'}
};

class Product extends Component {

    constructor(props) {
      super(props);
      this.state = {
          products : Product_List,
          filterText : ''
        }
    }

    handleFilter = (filterInput) => {
      this.setState(filterInput);
    }

    handleSave = (product) => {
      if (!product.id) {
           product.id = new Date().getTime()
      }
      this.setState((prevState) => {
        let products = prevState.products
        products[product.id] = product
        return { products }
      });

    }
    handleDestroy = (productId) => {
      this.setState((prevState) => {
        let products = prevState.products
        delete products[productId]
        return { products }
      });
  }

    render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h1>My Inventory</h1>
              <Filter 
                  onFilter={this.handleFilter}/>
  
              <ProductTable 
                  products={this.state.products} 
                  filterText={this.state.filterText}
                  onDestroy={this.handleDestroy}/>
  
              <ProductForm
                  onSave={this.handleSave}/>
              </div>
          </div>
        </div>
      )
    }
  }
  
  export default Product;