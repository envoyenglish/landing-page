import React, {Component} from 'react';
import {Container, Row, ColoredContainer, Cell, Grid, WhiteCellCentered} from '../styles/layout';
import {StyledPaymentForm} from '../styles/ui-components';
import {Button, Circle, LevelDescription, Tube, Chip} from '../styles/ui-components';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import Reviews from '../components/reviews';
import "./../App.css";

//content
import EN from '../content/discussion_course_en.json';
import ES from '../content/discussion_course_es.json';

const translations = {EN, ES};

class CommunicationCourseA2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    this.setState({messages: translations[lang]});
  }

  render() {
    const {messages} = this.state;
    const weeks = messages.weeks;

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        language={this.state.language}
      />
      
      <Container>
        <h1>{messages.title}</h1>
        <h2>{messages.tagline}</h2>
        <Row>
          <p className="hero-description">{messages.description}</p>
        </Row>
        <Row>
          <HashLink to="/business-communication-course/#payment-form">
            <Button primary>{messages.register_now}</Button>
          </HashLink>
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

          <h4 style={{textAlign: 'left'}}>Upcoming Courses</h4>
          
          <Tube style={{justifyContent: 'space-between', marginBottom: '2em'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>              
              <Circle className="circle">A2</Circle>
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
          </Tube>

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

      <ColoredContainer style={{paddingBottom: '5%'}}>
        <h1>{messages.FreeTrial.header}</h1>
        <h4>{messages.FreeTrial.description}</h4>
        <Link to='/register'><Button white>{messages.FreeTrial.button}</Button></Link>
      </ColoredContainer>

      <Container id="payment-form">
        <h1>{messages.register_now}</h1>
        <StyledPaymentForm 
          src="https://www.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=48"
          scrolling="no"
          width="1089"
          frameBorder="0"
        />
      </Container>
      </>
    );
  }
};

export default CommunicationCourseA2;