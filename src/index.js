import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import {useEffect} from 'react';
import SignupWidget from './views/signup-widget';
import TrialMissionBriefing from './views/trial-mission-briefing';
import FreeClassCode from './views/free-class-code';
import Missions from './views/missions';

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
    <Route exact path='/' component={App}/>
    <Route path='/free-trial' component={SignupWidget}/>
    <Route path='/missions' component={Missions}/>
    <Route path='/trial-mission-briefing' component={TrialMissionBriefing}/>
    <Route path='/free-class-code' component={FreeClassCode}/>
    <Route path='/audio' component={SignupWidget}/>
    <Route path='/apply' component={SignupWidget}/>
  </BrowserRouter>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
