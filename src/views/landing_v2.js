import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import EmailForm from '../components/email-form';
import Header from '../components/header';
import PricingTable from './pricing';

//styles
import {Container, ColoredContainer, Footer, Row, Cell, Grid} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube, MissionCover} from '../styles/ui-components';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

//images - Missions
import annualevent from '../assets/annualevent_business.png';
import finaldestination from '../assets/finaldestination_business.png';
import hiringgame from '../assets/hiringgame_business.png';

//images - How it Works
import ScheduleClass from '../assets/ScheduleClass.png';
import MissionBriefing from '../assets/MissionBriefing.png';
import CompleteMission from '../assets/CompleteMission.png';
import PersonalizedFeedback from '../assets/PersonalizedFeedback.png';

//images - gifs
import MissionAccomplishedGif from '../assets/MissionAccomplished.gif';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const translations = {EN, ES};

class LandingPage2 extends Component {

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
          <p className="hero-description">{messages.Hero.description2}</p>
        </Row>
        <Row>
          <HashLink to="/#how-it-works"><Button>{messages.Hero.button_1}</Button></HashLink>
          <Link to='/apply'><Button primary>{messages.Hero.button_2}</Button></Link>
        </Row>
      </Container>
      <ColoredContainer style={{paddingBottom: '5%'}}>
        <h1>{messages.MissionAccomplished.header}</h1>
        <h4 style={{textAlign: 'center', fontWeight: '400'}}>{messages.MissionAccomplished.description}</h4>
        <br/>
        <img src={MissionAccomplishedGif} alt="mission-accomplished"/>
      </ColoredContainer>
      <Container id="how-it-works">
        <h1>{messages.HowItWorks.header}</h1>
        <Grid>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxWidth: '150px', borderRadius: '100%'}} src={ScheduleClass} alt="how-it-works"/>
            <h4>{messages.HowItWorks2.signup}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks2.signup_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxWidth: '150px', borderRadius: '100%'}} src={MissionBriefing} alt="how-it-works"/>
            <h4>{messages.HowItWorks2.missionbriefing}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks2.missionbriefing_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%',maxWidth: '150px', borderRadius: '100%'}} src={CompleteMission} alt="how-it-works"/>
            <h4>{messages.HowItWorks2.completemission}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks2.completemission_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxWidth: '150px', borderRadius: '100%'}} src={PersonalizedFeedback} alt="how-it-works"/>
            <h4>{messages.HowItWorks2.getfeedback}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks2.getfeedback_description}</h5>
          </Cell>
        </Grid>
      </Container>
      <ColoredContainer secondary>
        <h1>{messages.Results.header}</h1>
        <blockquote style={{fontStyle: 'italic', fontSize: '1.5em', textAlign: 'center', margin: '10px', marginBottom: '0'}}>{messages.Results.description}</blockquote>
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
                <Link to='/apply'><Button>{messages.Hero.button_2}</Button></Link>
              </div>
            </Cell>
          })
        }
        </Grid>
      </Container>
      <ColoredContainer>
        <h1>{messages.Curriculum.header2}</h1>
        <Row>{messages.Curriculum.description2}</Row>
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
      {/* <PricingTable/> */}
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

export default LandingPage2;