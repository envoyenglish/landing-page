import React, {Component} from 'react';
import {Footer as StyledFooter} from '../styles/layout';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {

  render() {
    return(
      <StyledFooter>
        <h4>{this.props.header}</h4>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faPhoneAlt}/></span>  <a href="https://wa.me/5215584219934" className="contact-link">+52 55 8421 9934 (Whatsapp)</a></p>
        <p><span><FontAwesomeIcon color='white' size="1x" icon={faEnvelope}/></span>  <a href="mailto:hello@envoyenglish.com" className="contact-link">hello@envoyenglish.com</a></p>
        <br/>
        <p style={{fontSize: '12px'}}><span role="img">©</span>️ 2020 Envoy English. All Rights Reserved.  Envoy Education, Inc.</p>
      </StyledFooter>
    );
  }
}

export default Footer;