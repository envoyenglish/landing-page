import React, {Component} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Container, Row, ColoredContainer, Cell, Grid, WhiteCellCentered} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube, Chip} from '../styles/ui-components';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import Reviews from '../components/reviews';
import EmailForm from '../components/email-form';
import Footer from '../components/footer';
import "./../App.css";

//content
import EN from '../content/business_course_en.json';
import ES from '../content/business_course_es.json';

const translations = {EN, ES};

class BusinessCommunicationCourseB1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: translations.ES
    }
  }

  componentDidMount() {
    this.setState({messages: translations[this.props.language]});
  }

  createCheckout = async () => {

    const data = {
      sku: "sku_HxXu6yNaebYtoE",
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

  render() {
    const {messages} = this.state;
    const weeks = messages.weeks;

    return (
      <>
      <Container>
        <h1>{messages.title}</h1>
        <h2>{messages.tagline}</h2>
        <Row>
          <p className="hero-description">{messages.description}</p>
        </Row>
        <Row>
          <Button onClick={() => this.createCheckout()} primary>{messages.register_now}</Button>
        </Row>
      </Container>

      <ColoredContainer>
        <h1>{messages.course_overview}</h1>
        <Row style={{alignItems: 'center'}}>
          <h5>{messages.course_description}</h5>
        </Row>
        <WhiteCellCentered>
          <ul>
            <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.total_classes} </span>4 classes</li>
            <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.available_levels}</span>{messages.levels}</li>
            <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.class_size_title}</span>{messages.class_size}</li>
            <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.price_title}</span>{messages.price}</li>
          </ul>
        </WhiteCellCentered>

          {/* <h4 style={{textAlign: 'left'}}>Upcoming Courses</h4>
          
          <Tube style={{justifyContent: 'space-between', marginBottom: '2em'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>              
              <Circle className="circle">B1</Circle>
              <LevelDescription>
                <p style={{'fontWeight': '600', 'fontFamily': 'Exo, sans-serif'}}>{messages.dates}</p> 
                <div className="class-times">
                  <span>{messages.days}</span>
                  <Chip>7PM CDMX</Chip>
                </div>
              </LevelDescription>
            </div>
            <div>
              <HashLink to="/business-communication-course/#payment-form">
                <Button primary>{messages.register}</Button>
              </HashLink>
            </div>
          </Tube> */}

      </ColoredContainer>

      <Container>
        <h1 style={{marginBottom: '10px'}}>{messages.curriculum}</h1>
        <Grid>
          {
            weeks.map((week, i) => {
              return <Cell key={i} style={{height: 'auto'}}>
                <h3>{week.week_number}</h3>
                <div>
                  <img src={week.mission_image} alt="mission-cover" style={{borderRadius: '50%', width: '60%', marginTop: '10px'}}/>
                  <h4>{week.mission_title}</h4>
                  <p>{week.mission_description}</p>
                </div>
              </Cell>
            })
          }
        </Grid>
      </Container>
      <ColoredContainer secondary>
        <h1>{messages.Reviews}</h1>
        <Reviews/>
      </ColoredContainer>

      <ColoredContainer style={{paddingBottom: 0}}>
        <h1>{messages.FreeTrial.header}</h1>
        <Row>
          <EmailForm url={'https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=37'}/>
        </Row>
      </ColoredContainer>

      <Footer/>
      </>
    );
  }
};

export default BusinessCommunicationCourseB1;