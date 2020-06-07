import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import EmailForm from '../components/email-form';
import Header from '../components/header';

//styles
import {Container, ColoredContainer, Footer, Row, Cell, Grid} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube, MissionCover} from '../styles/ui-components';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

//images
import convo from '../assets/videocall.png';
import obstacle from '../assets/obstacle.png';
import missioncompleted from '../assets/missioncompleted.png';
import annualevent from '../assets/annualevent_business.png';
import finaldestination from '../assets/finaldestination_business.png';
import hiringgame from '../assets/hiringgame_business.png';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const translations = {EN, ES};

class LandingPage extends Component {

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
    const Levels = messages.Levels;

    return (
      <>
      <Header
        page = {'landing'} 
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container hero>
        <h1>{messages.Hero.title}</h1>
        <h2>{messages.Hero.tagline}</h2>
        <Row>
          <p className="hero-description">{messages.Hero.description}</p>
        </Row>
        <Row>
          <HashLink to="/#how-it-works"><Button>{messages.Hero.button_1}</Button></HashLink>
          <Link to='/register'><Button primary>{messages.Hero.button_2}</Button></Link>
        </Row>
      </Container>
      <Container id="how-it-works">
        <h1>{messages.HowItWorks.header}</h1>
        <Row>{messages.HowItWorks.description}</Row>
        <Row left tall>
          <img src={convo} alt="chat"/>
          <div>
            <h3>{messages.HowItWorks.section_header_1}</h3>
            <h4>{messages.HowItWorks.section_tagline_1}</h4>
            <p>{messages.HowItWorks.section_description_1}</p>
          </div>
        </Row>
        <Row right tall>
          <div>
            <h3>{messages.HowItWorks.section_header_2}</h3>
            <h4>{messages.HowItWorks.section_tagline_2}</h4>
            <p>{messages.HowItWorks.section_description_2}</p>
          </div>
          <img src={obstacle} alt="obstacles"/>
        </Row>
        <Row left tall>
          <img src={missioncompleted} alt="levels" />
          <div>
            <h3>{messages.HowItWorks.section_header_3}</h3>
            <h4>{messages.HowItWorks.section_tagline_3}</h4>
            <p>{messages.HowItWorks.section_description_3}</p>
          </div>
        </Row>
      </Container>
      <ColoredContainer>
        <h1>{messages.Curriculum.header}</h1>
        <Row>{messages.Curriculum.description}</Row>
        <Container>
          {Levels.map((l, i) => {
            return <Tube key={i}>
              <Circle className="circle">{l.level}</Circle>
              <LevelDescription>
                <p style={{'fontWeight': '600', 'fontFamily': 'Exo, sans-serif'}}>{l.title}</p> 
                <p>{l.description}</p>
              </LevelDescription>
            </Tube>
          })}
        </Container>
      </ColoredContainer>
      <Container>
        <h1>{messages.UpcomingMissions.header}</h1>
        <Row>
          <p>
            {messages.UpcomingMissions.description}
          </p>
        </Row>
        <Grid>
        {
          missionExamples.map((mission, i) => {
            let imgSrc = annualevent;
            switch(mission.img) {
              case 'annualevent':
                imgSrc = annualevent;
                break;
              case 'finaldestination':
                imgSrc = finaldestination;
                break;
              case 'hiringgame':
                imgSrc = hiringgame;
                break;
              default:
                imgSrc = annualevent;
                break;
            }
            return <Cell key={i}>
              <div>
                <img style={{width: '50%', borderRadius: '100%'}} src={imgSrc.toString()} alt="mission-cover"/>
                <h4>{mission.title}</h4>
                <h5>{mission.subtitle}</h5>
              </div>
              <div>
                <Link to='/register'><Button>{messages.UpcomingMissions.button_1}</Button></Link>
              </div>
            </Cell>
          })
        }
        </Grid>
      </Container>
      <ColoredContainer>
        <h1>{messages.EmailForm.header}</h1>
        <Row>{messages.EmailForm.description}</Row>
        <Row>
          <EmailForm url={'https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=37'}/>
        </Row>
      </ColoredContainer>
      <Footer>
        <h4>{messages.Contact.header}</h4>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faPhoneAlt}/></span>  <a href="https://wa.me/5215584219934" className="contact-link">+52 55 8421 9934 (Whatsapp)</a></p>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faEnvelope}/></span>  <a href="mailto:hello@envoyenglish.com" className="contact-link">hello@envoyenglish.com</a></p>
        <br/>
        <p style={{fontSize: '12px'}}>©️ 2020 Envoy English. All Rights Reserved.  Agave Commerce, LLC.</p>
      </Footer>
      </>
    );
  }
};

export default LandingPage;