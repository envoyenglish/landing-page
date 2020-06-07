import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons, ApplicationDeadline, StyledBusinessLink} from '../styles/ui-components';
import logo from '../assets/logo.png';

//material
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const iconStyle={
  'width': '60px',
  'marginRight': '20px'
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
            <Link to='/register'><Button primary>{this.props.buttonText}</Button></Link>
          }
          {this.props.page === 'briefing' &&
            <a target='_blank' href={this.props.pdf}>
              <Button primary download>
                {this.props.language === 'EN' ? 'Download as PDF' : 'Descarger en PDF'}
              </Button>
            </a>
          }
          {this.props.handleChange && 
            <FormControl variant="outlined">
              <Select value={this.props.language} onChange={(e) => this.props.handleChange(e)}>
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'ES'}>ES</MenuItem>
              </Select>
            </FormControl>
          }
          {(this.props.page === 'landing' || this.props.page === 'landing') &&
            <ApplicationDeadline>
              {this.props.language === 'EN' && <Link id='business-sign-up' to='/business-communication-course'>NEW! Business Communication Course</Link>}
              {this.props.language === 'ES' && <Link id='business-sign-up' to='/business-communication-course'>¡NUEVO! ¡Únete al Curso de Business!</Link>}
            </ApplicationDeadline>
          }
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
