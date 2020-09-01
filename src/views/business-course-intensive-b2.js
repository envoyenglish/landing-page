import React, {Component} from 'react';
import {Container, WeekBlock, Row, ColoredContainer, WhiteCell, ClassSection} from '../styles/layout';
import {StyledPaymentForm} from '../styles/ui-components';
import {Button, Circle, LevelDescription, Tube, Chip} from '../styles/ui-components';
import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import Reviews from '../components/reviews';
import {secondary} from '../styles/colors';
import "./../App.css";

//content
import EN from '../content/business_course_intensive_en.json';
import ES from '../content/business_course_intensive_es.json';

//images
import investmentpitch from '../assets/InvestmentPitch.png';
import firstsale from '../assets/FirstSale.png';
import customercrisis from '../assets/CustomerCrisis.png';
import businessplan from '../assets/BusinessPlan.png';

import workshopinvestmentpitch from '../assets/WorkshopInvestmentPitch.png';
import workshopfirstsale from '../assets/WorkshopFirstSale.png';
import workshopcustomercrisis from '../assets/WorkshopCustomerCrisis.png';
import workshopbusinessplan from '../assets/WorkshopBusinessPlan.png';

const translations = {EN, ES};

class BusinessCommunicationCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: translations.ES
    }
  }

  componentDidMount() {
    this.setState({messages: translations[this.props.language]});
  }

  render() {
    const {messages} = this.state;
    const Weeks = messages.weeks;

    return (
      <>      
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
          <div>
            <ul style={{listStyle: 'none', padding: '20px'}}>
              <li><h4 style={{color: secondary}}>{messages.communication}</h4></li>
              <li><h5>{messages.communication_goal}</h5></li>
              <li><h4 style={{color: secondary}}>{messages.vocabulary}</h4></li>
              <li><h5>{messages.vocabulary_goal}</h5></li>
              <li><h4 style={{color: secondary}}>{messages.grammar}</h4></li>
              <li><h5>{messages.grammar_goal}</h5></li>
            </ul>
          </div>
          <WhiteCell style={{marginLeft: '20px'}}>
            <h4 style={{color: secondary}}>{messages.course_information}</h4>
            <ul>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.total_duration}</span>4 weeks</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.total_classes} </span>8 classes</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.available_levels}</span>{messages.levels}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.class_size_title}</span>{messages.class_size}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>{messages.price_title}</span>{messages.price}</li>
            </ul>
          </WhiteCell>
        </Row>

        {/* Class Schedule */}
          <h4 style={{textAlign: 'left'}}>Upcoming Courses</h4>
          <Tube style={{justifyContent: 'space-between', marginBottom: '2em'}}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>              
              <Circle className="circle">B1+</Circle>
              <LevelDescription>
                <p style={{'fontWeight': '600', 'fontFamily': 'Exo, sans-serif'}}>{messages.dates}</p> 
                <div className="class-times">
                  <span>{messages.days}</span>
                  <Chip>7PM CDMX</Chip>
                </div>
              </LevelDescription>
            </div>
            <HashLink to="/business-communication-course/#payment-form">
              <Button primary>{messages.register}</Button>
            </HashLink>
          </Tube>

      </ColoredContainer>

      <Container>
        <h1 style={{marginBottom: '10px'}}>{messages.curriculum}</h1>
        {
          Weeks.map((week, i) => {
            let imgSrc = investmentpitch;
            switch(week.mission_image) {
              case 'investmentpitch':
                imgSrc = investmentpitch;
                break;
              case 'firstsale':
                imgSrc = firstsale;
                break;
              case 'customercrisis':
                imgSrc = customercrisis;
                break;
              case 'businessplan':
                imgSrc = businessplan;
                break;
              default:
                imgSrc = investmentpitch;
                break;
            }

            let workshopSrc = workshopinvestmentpitch;  
            switch(week.workshop_image) {
              case 'investmentpitch':
                workshopSrc = workshopinvestmentpitch;
                break;
              case 'firstsale':
                workshopSrc = workshopfirstsale;
                break;
              case 'customercrisis':
                workshopSrc = workshopcustomercrisis;
                break;
              case 'businessplan':
                workshopSrc = workshopbusinessplan;
                break;
              default:
                workshopSrc = workshopinvestmentpitch;
                break;
            }
            return <WeekBlock key={i}>
            <ClassSection>
              <div style={{padding: '5%', textAlign: 'center'}}>
                <img src={workshopSrc.toString()} alt="workshop" width="90%"/>
              </div>
              <div>
                <h4>{week.week_number}{messages.workshop}</h4>
                <hr/>
                {week.workshop_description}
              </div>
            </ClassSection>
            <ClassSection>
              <div style={{padding: '5%', textAlign: 'center'}}>
                <img src={imgSrc.toString()} alt="workshop" width="90%"/>
              </div>
              <div>
              <h4>{week.mission_title}</h4>
                <hr/>
                {week.mission_description}
              </div>
            </ClassSection>
          </WeekBlock>
        })
      }   
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
          src="https://www.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=46"
          scrolling="no"
          frameBorder="0"
          height="1289"
          seamless="seamless"
        />
      </Container>

      </>
    );
  }
};

export default BusinessCommunicationCourse;