import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons, HamburgerMenu, DesktopMenu} from '../styles/ui-components';
import logo from '../assets/logo.png';
import NavMenu from './menu';
import MobileMenu from './mobilemenu';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//material
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const iconStyle={
  'width': '45px',
  'marginRight': '20px',
  'minWidth': '100%'
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'EN'  
    }
  }

  render() {
    let buttonText = 'Prueba gratis';
    if (this.props.language === 'EN') {
      buttonText = 'Try for free';
    } else {
      buttonText = 'Prueba gratis';
    }

    return (
      <Navbar className = {this.props.className}>
          <DesktopMenu>
            <Link to="/">
              <img src={logo} alt="logo" style={iconStyle}/>
            </Link>
            <Logo>Envoy English</Logo>
            <NavMenu/>
          </DesktopMenu>
          <HamburgerMenu>
          <MobileMenu pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <FontAwesomeIcon color='black' size="2x" icon={faBars} id="page-wrap"/>
          </HamburgerMenu>
        <NavbarButtons>
          {this.props.page !== 'free-trial' &&
            <Link to='/register'><Button primary id="register">{buttonText}</Button></Link>
          }
          {this.props.page === 'briefing' &&
            <a target='_blank' rel='noopener noreferrer' href={this.props.pdf}>
              <Button primary download>
                {this.props.language === 'EN' ? 'Download as PDF' : 'Descarger en PDF'}
              </Button>
            </a>
          }
          <FormControl variant="outlined">
            <Select style={{width: '70px'}}
              value={this.props.language}
              onChange={(e) => this.props.handleSetLanguage(e.target.value)}
            >
              <MenuItem value={'EN'}>EN</MenuItem>
              <MenuItem value={'ES'}>ES</MenuItem>
            </Select>
          </FormControl>
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
