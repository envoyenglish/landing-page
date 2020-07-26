import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {StyledApplicationForm} from '../styles/ui-components';
import Header from '../components/header';
import Footer from '../components/footer';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class Application extends Component {

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

    return (
      <>
      <Header 
        page = {'apply'}
        handleChange={(e) => this.handleChange(e)}
        buttonText={messages.Hero.button_2}
        language={this.state.language}
      />
      <Container>
        <h1>{messages.Application.header}</h1>
        <h2>{messages.Application.tagline}</h2>
        <Row>
          <h4>{messages.Application.description_2}</h4>
        </Row>
      <StyledApplicationForm 
        src="https://services.cognitoforms.com/f/neg3yezHME-sqGKAznf3rA?id=36"
        scrolling='yes'
        frameBorder='0'
        seamless='seamless'
        title='application'          
      />
      </Container>
      <Footer header={messages.Contact.header}/>
      </>
    );
  }
};

export default Application;
