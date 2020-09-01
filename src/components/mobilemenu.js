import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';
import './../App.css';
import logo from '../assets/logo.png';

const iconStyle={
  'width': '75px',
  'position': 'relative',
  'top': '-15px',
  'left': '-15px'
}

class MobileMenu extends React.Component {
  render () {
    return (
      <Menu disableAutoFocus>
        <Link to='/'><img src={logo} alt="logo" style={iconStyle}/></Link>
        <Link to='/register' id="free-trial-menu-item">FREE Trial Class</Link>
        <h4>Courses</h4>
        <Link to='/business-english-masterclass-intensive'>Business English Masterclass</Link>
        <Link to='/business-communication-course'>Business Communication Course</Link>
        <Link to='/discussion-course-a2'>Conversation Course</Link>
      </Menu>
    );
  }
}

export default MobileMenu;