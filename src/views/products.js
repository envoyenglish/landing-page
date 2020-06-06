import React, {Component} from 'react';
import {Container, WeekBlock, Row, ColoredContainer, WhiteCell, ClassSection} from '../styles/layout';
import {Button, StyledPaymentForm} from '../styles/ui-components';
import {Link} from 'react-router-dom';
import Header from '../components/header';

//content
import EN from '../content/products_en.json';
import ES from '../content/products_es.json';

//images
import investmentpitch from '../assets/InvestmentPitch.png';
import firstsale from '../assets/FirstSale.png';
import customercrisis from '../assets/CustomerCrisis.png';
import businessplan from '../assets/BusinessPlan.png';
import workshop from '../assets/Workshop.png';

const translations = {EN, ES};

class ProductsTable extends Component {

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
    const Weeks = messages.weeks;

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
          <Link to="/">
            <Button primary>{messages.buy_now}</Button>
          </Link>
        </Row>
      </Container>

      <ColoredContainer>
        <h1>{messages.course_overview}</h1>
        <Row>
          <div>
            <h2 style={{textAlign: 'left'}}>{messages.learning_goals}</h2>
            <ul style={{listStyle: 'none'}}>
              <li><h4>{messages.communication}</h4></li>
              <li><h5>{messages.communication_goal}</h5></li>
              <li><h4>{messages.vocabulary}</h4></li>
              <li><h5>{messages.vocabulary_goal}</h5></li>
              <li><h4>{messages.grammar}</h4></li>
              <li><h5>{messages.grammar_goal}</h5></li>
            </ul>
          </div>
          <WhiteCell>
            <h3>{messages.course_information}</h3>
            <ul>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Total Duration: </span>4 weeks</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Dates: </span>{messages.dates}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Weekly Schedule: </span>{messages.days}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Available Levels: </span>{messages.levels}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Class Size: </span>{messages.class_size}</li>
              <li><span style={{fontWeight: '800', fontFamily: 'Exo'}}>Price: </span>{messages.price}</li>
            </ul>
          </WhiteCell>
        </Row>
      </ColoredContainer>

      <Container>
        <h1>{messages.curriculum}</h1>
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
            return <WeekBlock key={i}>
            <ClassSection>
              <div style={{padding: '5%', textAlign: 'center'}}>
                <img src={workshop} width="90%"/>
              </div>
              <div>
                <h4>{week.week_number} (Tuesday)</h4>
                <hr/>
                {week.workshop_description} (45 minutes)
              </div>
            </ClassSection>
            <ClassSection>
              <div style={{padding: '5%', textAlign: 'center'}}>
                <img src={imgSrc.toString()} width="90%"/>
              </div>
              <div>
                <h4>{week.week_number} (Thursday)</h4>
                <hr/>
                {week.mission_description} (55 minutes)
              </div>
            </ClassSection>
          </WeekBlock>
        })
      }   
      </Container>
      <ColoredContainer secondary>
        <h1>Reviews</h1>
      </ColoredContainer>
      <Container>
        <StyledPaymentForm 
          src="https://www.cognitoforms.com/AgaveCommerce/ClassSignUp"
          scrolling="no"
          frameBorder="0"
        />
      </Container>
      </>
    );
  }
};

export default ProductsTable;