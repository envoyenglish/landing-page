import React, {Component} from 'react';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    console.log('CHECKOUT MOUNTED')
    this.loadProducts();
  }

  createCheckout = async () => {

    const data = {
      sku: "sku_Hwqa8xPUzTNHpb",
      quantity: 1,
    };

    const response = await fetch('/.netlify/functions/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  
    // const stripe = Stripe(response.publishableKey);
    // const { error } = await stripe.redirectToCheckout({
    //   sessionId: response.sessionId,
    // });
  
    // if (error) {
    //   console.error(error);
    // }
  }

  loadProducts =  () => {
    fetch('/.netlify/functions/get-products')
      .then(res => {
        const products = res.data;
        console.log('PRODUCTS', products)
        this.setState({products})
      })
      .catch((err) => console.error(err));
  }

  render() {
    return <div>
      <div>{JSON.stringify(this.state.products)}</div>
      <button onClick={() => this.createCheckout()}>Checkout</button>
    </div>
  }
};

export default Checkout;

