import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import {DropdownMenu, DropdownMenuButton, DropdownMenuItems, DropdownMenuList} from '../styles/ui-components';

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMenu: false,
    };
  
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };
  
  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }
  
    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });
    }
 
    render() {
     return (
         <DropdownMenu onMouseEnter={this.showDropdownMenu}>
          <DropdownMenuButton onClick={this.showDropdownMenu}>Courses<span style={{position: 'absolute', paddingLeft: '10px'}}><FontAwesomeIcon color='gray' size="1x" icon={faCaretDown}/></span> </DropdownMenuButton>
           {this.state.displayMenu ? (
            <DropdownMenuList>
              <DropdownMenuItems onClick={this.hideDropdownMenu}><Link to='/business-english-masterclass-intensive'>Business English Masterclass</Link></DropdownMenuItems>
              <DropdownMenuItems onClick={this.hideDropdownMenu}><Link to='/business-communication-course'>Business Communication Course</Link></DropdownMenuItems>
              <DropdownMenuItems onClick={this.hideDropdownMenu}><Link to='/discussion-course-a2'>Conversation Course</Link></DropdownMenuItems>
           </DropdownMenuList>
            ) : null
         }
        </DropdownMenu>
     );
   }
 }

 export default NavMenu;

