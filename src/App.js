import React from 'react';
import './App.css';
import { BrowserRouter, useLocation, Route, Redirect, Switch } from 'react-router-dom';
import {useEffect, useState} from 'react';
import LandingPage2 from './views/landing_v2';
import Header from './components/header';
import MenuContext from './components/menuContext';
import SignupWidget from './views/signup-widget';
import BusinessProgram from './views/business';
import Apply from './views/apply';
import FeedbackForm from './views/feedback';
import Success from './views/success';
import Failure from './views/failure';

//courses
import BusinessCommunicationCourseIntensiveB2 from './views/business-course-intensive-b2';
import BusinessCommunicationCourseB1 from './views/business-course-b1';
import CommunicationCourseA2 from './views/discussion-course-a2'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const MenuProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false)
  
  return (
    <MenuContext.Provider value={{
      isMenuOpen: menuOpenState,
      toggleMenu: () => setMenuOpenState(!menuOpenState),
      stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
    }}>
      {props.children}
    </MenuContext.Provider>
  )
}

function App() {

  const browserDefault = navigator.language;
  let defaultLanguage = 'ES';
  if (browserDefault.includes('en')) {
    defaultLanguage = 'EN';
  }

  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : defaultLanguage); 

  return (
    <MenuProvider>
      <BrowserRouter>
      <Header
        language={language}
        handleSetLanguage={language => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }} 
      />
      <ScrollToTop/>
      <Switch>
        <Route exact path='/' component={() => <LandingPage2 language={language}/>} />
        <Route path='/payment-success' component={Success}/>
        <Route path='/payment-failure' component={Failure}/>
        <Route path='/free-trial' component={() => <SignupWidget language={language}/>}/>
        <Route path='/register' component={() => <Apply language={language}/> }/>
        <Route path='/business' component={() => <BusinessProgram language={language}/>}/>
        <Route path='/feedback' component={FeedbackForm}/>
        <Route path='/business-communication-course' component={() => <BusinessCommunicationCourseB1 language={language}/> }/>
        <Route path='/business-english-masterclass-intensive' component={() => <BusinessCommunicationCourseIntensiveB2 language={language}/> }/>
        <Route path='/discussion-course-a2' component={() => <CommunicationCourseA2 language={language}/> }/>
        <Redirect to='/'/>
      </Switch>
    </BrowserRouter>
  </MenuProvider>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
