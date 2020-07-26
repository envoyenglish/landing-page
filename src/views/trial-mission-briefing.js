import React, {Component} from 'react';
import Header from '../components/header';

class TrialMissionBriefing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN',
      pdf: 'https://drive.google.com/open?id=1YSCoByXdhtGIz0a5yQ8CbSl7F5UVVjbt'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const iframe = document.getElementById('briefing');
    const body = iframe.contentWindow.document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  }

  handleChange(event) {
    const lang = event.target.value;
    this.setState({language: lang});
    const iframe = document.getElementById('briefing')
    if (lang === 'EN') {
      iframe.setAttribute("src", "https://drive.google.com/file/d/1YSCoByXdhtGIz0a5yQ8CbSl7F5UVVjbt/preview");
      this.setState({pdf: 'https://drive.google.com/open?id=1YSCoByXdhtGIz0a5yQ8CbSl7F5UVVjbt'})
    }
    if (lang === 'ES') {
      iframe.setAttribute("src", "https://drive.google.com/file/d/1c0kc3cN29ucYJOZTzSfJBTxKEipC2i0Y/preview");
      this.setState({pdf: 'https://drive.google.com/file/d/1c0kc3cN29ucYJOZTzSfJBTxKEipC2i0Y'})
    }
  }

  render() {
    return (
      <>
      <Header
        className = 'briefing-header'
        handleChange = {(e) => this.handleChange(e)} 
        page={'briefing'}
        language={this.state.language}
        pdf={this.state.pdf}
      />
      <div style={{height: '100vh', width: '100vw'}}>
        <iframe
          id = 'briefing'
          src= "https://drive.google.com/file/d/1YSCoByXdhtGIz0a5yQ8CbSl7F5UVVjbt/preview"
          width="100%"
          seamless='seamless'
          overflow='hidden'
          height="100%"
          title="trial-mission-briefing"
        />
      </div>
      </>
    );
  }
};

export default TrialMissionBriefing;