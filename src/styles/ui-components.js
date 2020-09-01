import styled, {css} from 'styled-components';
import {primary, secondary} from './colors';

export const DropdownMenu = styled.div`
  position: relative;
  z-index: 1;
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const DropdownMenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 25px;
  padding-bottom: 15px;
  top: 35px;
  width: 260px;
  background-color: white;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

export const DropdownMenuItems = styled.li`
  padding-bottom: 10px;
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const DropdownMenuButton = styled.div`
  position: absolute;
  top: -12px;
  font-size: 18px;
  font-weight: lighter;
  font-family: Exo;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const StudentQuote = styled.blockquote`
  padding: 20px;
  width: 90% !important;
  font-style: italic;
  font-size: 1.5em;

  p {
    font-style: normal;
    text-transform: uppercase;
    text-align: right;
    padding-right: 5%;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1em;
  }
`;

export const ApplicationDeadline = styled.div`
  font-size: .8em;
  text-transform: capitalize;
  position: relative;
  top: 10px;
  max-width: 250px;
  text-align: right;
  padding-right: 5%;

  @media only screen and (max-width: 425px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 4px;
  border: ${primary} 2px solid;
  font-weight: 600;
  color: ${primary};
  margin: 0.5em 1em;
  width: max-content;
  max-height: 55px;
  padding: 1em 1.5em;
  cursor: pointer;

  a {
    color: ${primary};
  }

  :hover {
    cursor: pointer;
    background: ${primary};
    color: white;
  }

  ${props => props.white && css`
    color: white;
    border: white solid 2px;

    :hover {
      background: white;
      color: ${primary};
    }
  `}

  ${props => props.primary && css`
    background: ${primary};
    color: white;

    a {
      color: white;
    }

    :hover {
      cursor: pointer;
      background: white;
      border: ${primary} solid 2px;
      color: ${primary};
    }
  `}

  ${props => props.signup && css`
    background: ${primary};
    color: white;
    padding: .75em 1.5em;
  `}

  ${props => props.download && css`
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      display: none;
    }
  `}
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`;

export const NavbarButtons = styled.div`
  position: absolute,
  top: 5%;
  right: 3%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  #register {
    margin-left: 15%;
  }

  @media only screen and (max-width: 425px) {
    #register {
      display: none;
    }
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  @media only screen and (min-width: 601px) {
    display: none;
  }

  @media only screen and (max-width: 600) {
    display: inline-block;
  }
`;

export const Logo = styled.p`
  font-family: 'Exo', sans-serif;
  font-weight: 800;
  font-size: 1.5em;
  flex: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media only screen and (min-width: 425px) and (max-width: 768px) {
    font-size: 1.2em;
  }

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    display: none;
  }
`;

export const Tube = styled.div`
  color: black;
  background: white;
  border: black 2px solid;
  border-radius: 45px;
  padding: 10px;
  margin-bottom: .5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 800px;

  :hover {
    & .circle {
      background-color: ${primary};
      color: white;
    }
  }

  @media only screen and (max-width: 425px) {
    font-size: .8em;
  }
`;

export const LevelDescription = styled.div`
  text-align: left;
  padding-left: 2em;

  @media only screen and (max-width: 425px) {
    .class-times {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
    }

    span {
      margin-left: 0;
    }
  }
`;

export const Circle = styled.div`
  border: ${primary} 6px solid;
  border-radius: 50%;
  padding: 2px;
  min-width: 2em;
  min-height: auto;
  color: ${primary};
  font-size: 24px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  font-weight: 600;
  font-family: 'Exo', sans-serif;
`;

export const MissionCover = styled.img`
  width: 25%;
  border-radius: 100%;
`;

export const StyledEmailForm = styled.iframe`
  position: relative;
  min-width: 100%;
  overflow: hidden;
  height: 487px;
  top: -30px;
  width: 100%;
  padding-bottom: 5%;

  @media only screen and (max-width: 512px) {
    height: 600px;
  }
`;

export const StyledDocs = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 15%;
  top: 15%;
  @media only screen and (max-width: 720px) {
    position: absolute;
    left: 0% !important;
    min-width: 100%;
    height: 100%;
  }
`;

export const StyledApplicationForm = styled.iframe`
  position: relative;
  min-width: 100%;
  width: 100%;
  padding-bottom: 5%;
  height: ${p => p.height};

  @media only screen and (max-width: 512px) {
    height: ${p => p.height && '300px'};
    overflow: scroll;
    padding-bottom: 10%;
  }

  @media only screen and (min-width: 512px) and (max-width: 768px) {
    height: ${p => p.height && '300px'};
  }
`;

export const StyledPaymentForm = styled.iframe`
  position: relative;
  min-width: 100%;
  width: 1px;
  width: 100%;
  height: ${p => p.height}px;
  padding-bottom: 5%;

  @media only screen and (max-width: 425px) {
    height: 1800px;
  }
`;

export const Chip = styled.span`
  background-color: ${secondary};
  text-transform: uppercase;
  padding: 2px 8px;
  font-weight: 600;
  border-radius: 3px;
  margin: 0 5px;
  text-decoration: none;
`;