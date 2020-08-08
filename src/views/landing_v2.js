import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Footer from '../components/footer';
import Header from '../components/header';
import Reviews from '../components/reviews';

//styles
import {Container, ColoredContainer, Row, Cell, Grid} from '../styles/layout';
import {Button, Circle, LevelDescription, Tube, Chip} from '../styles/ui-components';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';


//images - How it Works
import ScheduleClass from '../assets/ScheduleClass.png';
import MissionBriefing from '../assets/MissionBriefing.png';
import CompleteMission from '../assets/CompleteMission.png';
import PersonalizedFeedback from '../assets/PersonalizedFeedback.png';

//images - gifs
import MissionAccomplishedGif from '../assets/MissionAccomplished.gif';

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
    const courses = messages.Courses;
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
        <Row id="course-offer">
          <Chip>NEW!</Chip><HashLink style={{textAlign: 'left', paddingLeft: '8px'}} to='/#courses'><span>{messages.Hero.course_offer}</span></HashLink>
        </Row>
        <Row>
          <HashLink to="/#courses"><Button>{messages.Hero.button_1}</Button></HashLink>
          <Link to='/register'><Button primary>{messages.Hero.button_2}</Button></Link>
        </Row>
      </Container>
      <ColoredContainer style={{paddingBottom: '5%'}}>
        <h1>{messages.MissionAccomplished.header}</h1>
        <h4 style={{textAlign: 'center', fontWeight: '400'}}>{messages.MissionAccomplished.description}</h4>
        <br/>
        <img src={MissionAccomplishedGif} alt="mission-accomplished"/>
        <br/>
      </ColoredContainer>
      <Container id="how-it-works">
        <h1>{messages.HowItWorks.header}</h1>
        <Grid>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxHeight: '150px', maxWidth: '150px', borderRadius: '100%'}} src={ScheduleClass} alt="how-it-works"/>
            <h4>{messages.HowItWorks.signup}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks.signup_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxHeight: '150px',maxWidth: '150px', borderRadius: '100%'}} src={MissionBriefing} alt="how-it-works"/>
            <h4>{messages.HowItWorks.missionbriefing}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks.missionbriefing_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxHeight: '150px', maxWidth: '150px', borderRadius: '100%'}} src={CompleteMission} alt="how-it-works"/>
            <h4>{messages.HowItWorks.completemission}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks.completemission_description}</h5>
          </Cell>
          <Cell style={{border: 'none', height: 'auto'}}>
            <img style={{width: '100%', height: '100%', maxHeight: '150px', maxWidth: '150px', borderRadius: '100%'}} src={PersonalizedFeedback} alt="how-it-works"/>
            <h4>{messages.HowItWorks.getfeedback}</h4>
            <h5 style={{textAlign: 'left', margin: '0' }}>{messages.HowItWorks.getfeedback_description}</h5>
          </Cell>
        </Grid>
      </Container>
      <ColoredContainer secondary>
        <h1>{messages.Results.header}</h1>
        <blockquote style={{fontSize: '1.2em', textAlign: 'center', fontWeight: '600', margin: '5px', marginBottom: '0'}}>{messages.Results.description}</blockquote>
        <Reviews/>
      </ColoredContainer>
      <Container id="courses">
        <h1>{messages.UpcomingCourses.header}</h1>
        <Row>
          <p>
            {messages.UpcomingCourses.description}
          </p>
        </Row>
        <Grid>
        {
          courses.map((course, i) => {
            return <Cell key={i} style={{justifyContent: 'space-evenly', height: 'auto'}}>
              <Circle classame="circle" style={{width: '50px', marginBottom: '5%'}}>{course.level}</Circle>
              <div>
                <h3>{course.title}</h3>
                <h5>{course.subtitle}</h5>
              </div>
              <div>
                <Link to={course.link}><Button>{messages.UpcomingCourses.button_1}</Button></Link>
              </div>
            </Cell>
          })
        }
        </Grid>
      </Container>
      <ColoredContainer>
        <h1 style={{paddingBottom: '2%'}}>{messages.Curriculum.header}</h1>
        <Container style={{padding: '0 5%'}}>
          {Levels.map((l, i) => {
            return <Tube key={i}>
              <Circle className="circle">{l.level}</Circle>
              <LevelDescription>
                <p style={{'fontWeight': '600', 'fontFamily': 'Exo, sans-serif'}}>{l.title}</p> 
                <p>{l.description}</p>
              </LevelDescription>
            </Tube>
          })}
          <Row><h4>{messages.Curriculum.description}</h4></Row>
          <Link to='/register'><Button white>{messages.Hero.button_2}</Button></Link>
        </Container>
      </ColoredContainer>
      <Footer header={messages.Contact.header}/>
      </>
    );
  }
};

export default LandingPage2;