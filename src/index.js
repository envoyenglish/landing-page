import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import SignupWidget from './views/signup-widget';
import SignUpMissions from './views/signup-missions';
import TrialMissionBriefing from './views/trial-mission-briefing';
import PartyMissionBriefing from './views/party-mission-briefing';
import TravelMissionBriefing from './views/travel-mission-briefing';
import FreeClassCode from './views/free-class-code';
import BusinessProgram from './views/business';
import Apply from './views/apply';
import PricingTable from './views/pricing';
import Reviews from './components/reviews';
import FeedbackForm from './views/feedback';
import BusinessCommunicationCourse from './views/business-course';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop/>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/free-trial' component={SignupWidget}/>
      <Route path='/trial-mission-briefing' component={TrialMissionBriefing}/>
      <Route path='/party-mission-briefing' component={PartyMissionBriefing}/>
      <Route path='/travel-mission-briefing' component={TravelMissionBriefing}/>
      <Route path='/free-class-code' component={FreeClassCode}/>
      <Route path='/audio' component={SignupWidget}/>
      <Route path='/missions' component={SignUpMissions}/>
      <Route path='/apply' component={Apply}/>
      <Route path='/register' component={Apply}/>
      <Route path='/business' component={BusinessProgram}/>
      <Route path='/feedback' component={FeedbackForm}/>
      <Route path='/reviews' component={Reviews}/>
      <Route path='/business-communication-course' component={BusinessCommunicationCourse}/>
      <Redirect to='/'/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
