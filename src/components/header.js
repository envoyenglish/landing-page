import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons} from '../styles/ui-components';
import logo from '../assets/logo.png';

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

    return (
      <Navbar className = {this.props.className}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Link to="/">
            <img src={logo} alt="logo" style={iconStyle}/>
          </Link>
          <Logo>Envoy English</Logo>
        </div>
        <NavbarButtons>
          {this.props.page === 'landing' &&
            <Link to='/register'><Button primary id="register">{this.props.buttonText}</Button></Link>
          }
          {this.props.page === 'briefing' &&
            <a target='_blank' rel='noopener noreferrer' href={this.props.pdf}>
              <Button primary download>
                {this.props.language === 'EN' ? 'Download as PDF' : 'Descarger en PDF'}
              </Button>
            </a>
          }
          {this.props.handleChange && 
            <FormControl variant="outlined">
              <Select style={{width: '70px'}} value={this.props.language} onChange={(e) => this.props.handleChange(e)}>
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'ES'}>ES</MenuItem>
              </Select>
            </FormControl>
          }
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
