import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Container, Grid, Cell, Footer, Row, ColoredContainer} from '../styles/layout';
import {Button} from '../styles/ui-components';
import EmailForm from '../components/email-form';
import Header from '../components/header';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const translations = {EN, ES};

class Missions extends Component {
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
    const missionExamples = messages.Missions;

    return (
      <>
      <Header 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container>
        <h2>{messages.UpcomingMissions.header}</h2>
        <Grid>
          {
            missionExamples.map((mission, i) => {
              return <Cell key={i}>
                <div>
                  <h4>{mission.title}</h4>
                  <h5>{mission.subtitle}</h5>
                </div>
                <div>
                  <p>Available for: {mission.levels}</p>
                  <Link to='/register'><Button primary>Join Mission</Button></Link>
                </div>
              </Cell>
            })
          }
          <Cell>
            <div>
              <h4>Request a mission</h4>
              <h5>Don't see an interesting topic for conversation here? Have a different language challenge in mind? Send us your ideas!</h5>
            </div>
            <Link to='#email-form'>
              <Button primary>Contact us</Button>
            </Link>
          </Cell>
        </Grid>
      </Container>
      <ColoredContainer>
        <h1>{messages.EmailForm.header}</h1>
        <Row>{messages.EmailForm.description}</Row>
        <Row>
          <EmailForm/>
        </Row>
      </ColoredContainer>
      <Footer>
        <h4>{messages.Contact.header}</h4>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faPhoneAlt}/></span>  +52 55 8421 9934 (Whatsapp)</p>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faEnvelope}/></span>  hello@envoyenglish.com</p>
      </Footer>
      </>
    );
  }
};

export default Missions;