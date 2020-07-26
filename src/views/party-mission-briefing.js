import React, {Component} from 'react';
import Header from '../components/header';

class PartyMissionBriefing extends Component {
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
        pdf={'https://drive.google.com/open?id=1OTygQ7Imp1XVdOGhkWV3d1-pnLmEOyVI'}
      />
      <div style={{height: '100vh', width: '100vw'}}>
        <iframe
          id = 'briefing'
          src= "https://drive.google.com/file/d/1OTygQ7Imp1XVdOGhkWV3d1-pnLmEOyVI/preview"
          width="100%"
          seamless='seamless'
          overflow='hidden'
          height="100%"
          title="party-mission-briefing"
        />
      </div>
      </>
    );
  }
};

export default PartyMissionBriefing;

