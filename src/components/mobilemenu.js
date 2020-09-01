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
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    return (
      <Menu disableAutoFocus
        isOpen = {this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link to='/' onClick={() => this.closeMenu()}><img src={logo} alt="logo" style={iconStyle}/></Link>
        <Link to='/register' onClick={() => this.closeMenu()} id="free-trial-menu-item">FREE Trial Class</Link>
        <h4>Courses</h4>
        <Link to='/business-english-masterclass-intensive' onClick={() => this.closeMenu()}>Business English Masterclass</Link>
        <Link to='/business-communication-course' onClick={() => this.closeMenu()}>Business Communication</Link>
        <Link to='/discussion-course-a2' onClick={() => this.closeMenu()}>Conversation Course</Link>
      </Menu>
    );
  }
}

export default MobileMenu;