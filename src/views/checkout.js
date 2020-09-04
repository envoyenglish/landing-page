import React, {Component} from 'react';
import axios from 'axios';
import { array } from 'prop-types';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts =  () => {
    axios.get('/.netlify/functions/get-products')
      .then(res => {
        const products = res.data;
        this.setState({products})
      })
      .catch((err) => console.error(err));
  }

  render() {
    return <div>{JSON.stringify(this.state.products)}</div>
  }
};

export default Checkout;

