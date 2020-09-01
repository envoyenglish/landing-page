import React, {Component} from 'react';
import {Container, Row, ColoredContainer} from '../styles/layout';
import Footer from '../components/footer';
import SimplybookWidget from '../components/simplybookwidget';
import EmailForm from '../components/email-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class SignupWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: translations.ES
    }
  }

  componentDidMount() {
    this.setState({messages: translations[this.props.language]});
    const widget = new SimplybookWidget({"widget_type":"iframe","url":"https://envoyenglish.simplybook.me","theme":"dainty","theme_settings":{"timeline_show_end_time":"1","sb_base_color":"#292076","secondary_color":"#958cdb","sb_text_color":"#a1a1a1","display_item_mode":"block","body_bg_color":"#ffffff","sb_background_image":"","dark_font_color":"#363636","light_font_color":"#ffffff","sb_company_label_color":"#ffffff","sb_cancellation_color":"#ff7a93","hide_img_mode":"0"},"timeline":"modern","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":{"service":"4"}}});
    widget.displayIframe();
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
      <Container>
        <h1>{messages.FreeTrial.header}</h1>
        <h2>{messages.FreeTrial.tagline}</h2>
      <Row>
        <h3>{messages.FreeTrial.description}</h3>
      </Row>
      <Row>
        <FontAwesomeIcon id="down-arrow" color='lightgray' size="3x" icon={faChevronDown}/>
      </Row>
      </Container>
      <Container id="booking-container"/>
      <ColoredContainer>
        <h1>{messages.FreeTrial.contact}</h1>
        <Row>{messages.FreeTrial.contact_description}</Row>
        <Row>
          <EmailForm url={'https://www.cognitoforms.com/AgaveCommerce/EnvoyEnglishEmailSignup'}/>
        </Row>
      </ColoredContainer>
      <Footer header={messages.Contact.header}/>
      </>
    );
  }
};

export default SignupWidget;
