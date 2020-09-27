import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Container} from '../styles/layout';
import {Button} from '../styles/ui-components';

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
  
    const stripe = await loadStripe(response.publishableKey);
    const { error } = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });
  
    if (error) {
      console.error(error);
    }
  }

  loadProducts = () => {
    fetch('/.netlify/functions/get-products')
      .then(res => res.json())
      .then(products => this.setState({products}))
      .catch((err) => console.error(err))
  }

  render() {
    return <Container>
      <Button onClick={() => this.createCheckout()}>Buy Class</Button>
    </Container>
  }
};

export default Checkout;

