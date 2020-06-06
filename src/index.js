import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import SignupWidget from './views/signup-widget';
import TrialMissionBriefing from './views/trial-mission-briefing';
import PartyMissionBriefing from './views/party-mission-briefing';
import TravelMissionBriefing from './views/travel-mission-briefing';
import FreeClassCode from './views/free-class-code';
import BusinessProgram from './views/business';
import Missions from './views/missions';
import Apply from './views/apply';
import PricingTable from './views/pricing';
import FeedbackForm from './views/feedback';
import ProductsTable from './views/products';

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
      <Route path='/missions' component={Missions}/>
      <Route path='/trial-mission-briefing' component={TrialMissionBriefing}/>
      <Route path='/party-mission-briefing' component={PartyMissionBriefing}/>
      <Route path='/travel-mission-briefing' component={TravelMissionBriefing}/>
      <Route path='/free-class-code' component={FreeClassCode}/>
      <Route path='/audio' component={SignupWidget}/>
      <Route path='/apply' component={Apply}/>
      <Route path='/business' component={BusinessProgram}/>
      <Route path='/feedback' component={FeedbackForm}/>
      <Route path='/products' component={ProductsTable}/>
      <Redirect to='/'/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
