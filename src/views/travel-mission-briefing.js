import React, {Component} from 'react';
import Header from '../components/header';

class TravelMissionBriefing extends Component {
  componentDidMount() {
    const iframe = document.getElementById('briefing');
    const body = iframe.contentWindow.document.getElementsByTagName('body')[0];
    body.style.overflow = 'hidden';
  }

  render() {
    return (
      <>
      <Header
        className = 'briefing-header' 
        page={'briefing'}
        language={'EN'}
        pdf={'https://drive.google.com/file/d/1kKeC6t_t0ZW4vx1SoxPE5Tw8NPNI7cn0'}
      />
      <div style={{height: '100vh', width: '100vw'}}>
        <iframe
          id = 'briefing'
          src= "https://drive.google.com/file/d/1kKeC6t_t0ZW4vx1SoxPE5Tw8NPNI7cn0/preview"
          width="100%"
          seamless='seamless'
          overflow='hidden'
          height="100%"
          title="travel-mission-briefing"
        />
      </div>
      </>
    );
  }
};

export default TravelMissionBriefing;

