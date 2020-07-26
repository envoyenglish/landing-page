import React, {Component} from 'react';
import {Container} from '../styles/layout';
import Header from '../components/header';
import SimplybookWidget from '../components/simplybookwidget';

//content
import EN from '../content/en.json';
import ES from '../content/es.json';

const translations = {EN, ES};

class SignUpMissions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      messages: EN
    }
  }

  componentDidMount() {
    const widget = new SimplybookWidget({"widget_type":"iframe","url":"https://envoyenglish.simplybook.me","theme":"dainty","theme_settings":{"timeline_show_end_time":"1","timeline_hide_unavailable":"0","sb_base_color":"#292076","secondary_color":"#e4ebf5","sb_text_color":"#a1a1a1","display_item_mode":"block","body_bg_color":"#ffffff","sb_background_image":"","dark_font_color":"#293b36","light_font_color":"#ffffff","sb_company_label_color":"#ffffff","sb_cancellation_color":"#ff7a93","hide_img_mode":"0"},"timeline":"grid_week","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":{"category":"6"}}})
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
      <Header
        page={'free-trial'} 
        handleChange={(e) => this.handleChange(e)}
        language={this.state.language}
      />
      <Container>
        <h1>{messages.UpcomingMissions.header}</h1>
        <h2>{messages.UpcomingMissions.description}</h2>
      </Container>
      <Container id="booking-container"/>
      </>
    );
  }
};

export default SignUpMissions;
