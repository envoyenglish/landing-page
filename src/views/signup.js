import React, {Component} from 'react';
import {Container, Row} from '../styles/layout';
import {Button} from '../styles/ui-components';
import SimplybookWidget from '../components/simplybookwidget';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class SignUpFreeTrial extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: translations.ES
    }
    this.simplybookButton = null;
  }

  componentDidMount() {
    this.setState({messages: translations[this.props.language]});
    this.simplybookButton = new SimplybookWidget({"widget_type":"button","url":"https:\/\/envoyenglish.simplybook.me","theme":"dainty","theme_settings":{"timeline_show_end_time":"1","sb_base_color":"#292076","secondary_color":"#e4ebf5","sb_text_color":"#a1a1a1","display_item_mode":"block","body_bg_color":"#ffffff","sb_background_image":"","dark_font_color":"#293b36","light_font_color":"#ffffff","sb_company_label_color":"#ffffff","sb_cancellation_color":"#ff7a93","hide_img_mode":"0"},"timeline":"modern_week","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":{"service":"4"}},"button_title":"Book now","button_background_color":"#292076","button_text_color":"#ffffff","button_position":"right","button_position_offset":"55%"});
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
        <Button primary onClick={() => this.simplybookButton.showPopupFrame()}>{messages.FreeTrial.button}</Button>
      </Row>
      </Container>
      </>
    );
  }
};

export default SignUpFreeTrial;
