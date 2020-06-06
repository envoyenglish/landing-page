import styled, {css} from 'styled-components';
import {primary} from './colors';

export const ApplicationDeadline = styled.div`
  font-size: .8em;
  font-weight: 800;
  text-transform: capitalize;
  text-decoration: underline;
  max-width: 150px;
  text-align: right;
  padding-right: 5%;
  color: ${primary};

  &:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 512px) {
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
`;

export const Logo = styled.p`
  font-family: 'Exo', sans-serif;
  font-weight: 800;
  font-size: 1.5em;
  flex: auto;

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

  :hover {
    & .circle {
      background-color: ${primary};
      color: white;
    }
  }
`;

export const LevelDescription = styled.div`
  text-align: left;
  padding-left: 2em;
`;

export const Circle = styled.div`
  border: ${primary} 6px solid;
  border-radius: 45px;
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
  height: 185px;
  overflow: hidden;
  width: 100%;
  padding-bottom: 5%;
  @media only screen and (max-width: 512px) {
    height: 304px;
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
  width: 100%;
  height: 750px;
  padding-bottom: 5%;

  @media only screen and (max-width: 425px) {
    height: 1025px;
  }
`;