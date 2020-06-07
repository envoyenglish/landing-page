import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Logo, Navbar, Button, NavbarButtons, ApplicationDeadline, Chip} from '../styles/ui-components';
import logo from '../assets/logo.png';
import Badge from '@material-ui/core/Badge';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Typography from '@material-ui/core/Typography';

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
            <a target='_blank' href={this.props.pdf}>
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
          {this.props.page === 'landing' &&
            <ApplicationDeadline>
              <Badge color="secondary" badgeContent={1} showZero style={{flexDirection: 'row-reverse', textDecoration: 'none'}}>
                <FontAwesomeIcon color='lightgray' size="2x" icon={faEnvelope}/>
                <Typography style={{position: 'relative', top: '-10px', right: '10px', textTransform: 'none'}}>
                  {this.props.language === 'EN' && <><Chip>NEW!</Chip><Link to='/business-communication-course'>Business Communication Course</Link></>}
                  {this.props.language === 'ES' && <><Chip>¡NUEVO!</Chip><Link to='/business-communication-course'>¡Únete a un curso de negocios!</Link></>}
                </Typography>
              </Badge>
            </ApplicationDeadline>
          }
        </NavbarButtons>
      </Navbar>
    );
  }
};

export default Header;
