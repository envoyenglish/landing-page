import styled, {css} from 'styled-components';
import {primary, secondary} from '../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 5% 5em;

  ${props => props.hero && css`
    padding-bottom: 9em;
    padding-left: 10%;
    padding-right: 10%;
  `}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 3em;

    ${props => props.hero && css`
      padding-bottom: 9em;
    `}
  }

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    ${props => props.hero && css`
      padding-bottom: 5%;
    `}
  }
`;

export const ColoredContainer = styled(Container)`
  background: ${primary};
  color: white;
  padding-bottom: 5%;

  ${props => props.secondary && css`
    background: ${secondary};
    color: black;
    padding-left: 20%;
    padding-right: 20%;

    @media only screen and (max-width: 768px) {
      padding-left: 5%;
      padding-right: 5%;
      padding-bottom: 10%;
    }
  `}
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1em 5% 3em;
  background: black;
  color: white;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    padding-left: 2em;
    padding-bottom: 2em;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;
`;

export const PricingCard = styled.div`
  border: ${primary} 4px solid;
  flex: 0 1 255px !important;
  padding: 30px 20px;
  margin: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  text-align: left;
  min-width: 250px;

  h2 {
    font-size: 2.1em;
  }

  @media only screen and (min-width: 325px) and (max-width: 768px) {
    min-height: 480px;
  }
`;

export const Cell = styled.div`
  height: 18em;
  width: 14em;
  border: ${primary} 4px solid;
  padding: 30px 20px;
  margin: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`;

export const BigCell = styled.div`
  width: 40%;
  min-width: 280px !important;
  border: ${primary} 4px solid;
  padding: 30px 20px;
  margin: 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const WhiteCell = styled.div`
  width: 90%;
  min-width: 280px;
  box-sizing: border-box;
  line-height: 2;
  border: white 4px solid;
  padding: 50px;
  padding-top: 20px; 
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 325px) and (max-width: 768px) {
    h3 {
      font-weight: 800;
      font-size: 1.2em;
    }
  }
`;

export const WeekBlock = styled.div`
  border: ${primary} 2px solid;
  border-left: ${primary} 20px solid;
  border-radius: 0px 10px 10px 0px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 5%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 425px) {
    border: 0;
  }
`;

export const ClassSection = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  flex-basis: 50%;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    img {
      width: 75%
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 5%;
    flex-basis: auto;
  }
`;

export const Row = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: 1em 0;
  justify-content: center;
  font-size: 1em;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  align-items: flex-start;

  img {
    flex: 0 2 400px;
    width: 50%;
    height: auto;
    margin: 0 1.5em;
    vertical-align: middle;
  }

  div {
    flex: 0 3 auto;
  }

  ${props => props.block && css`
    width: 90%;
    background-color: ${primary};
    color: white;
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 1em 0;

    img {
      width: 50px;
      margin-left: 0;
      margin-right: 1em;
    }

    a {
      color: white;
    }
  `}

  ${props => props.left && css`
    align-self: flex-start;
    text-align: left;
    justify-content: space-around;
  `}

  ${props => props.right && css`
    align-self: flex-end;
    text-align: right;
    justify-content: space-around;
  `}

  ${props => props.tall && css`
    margin: 3em 0;
  `}

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 1.5em 0;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 425px) and (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 320px) and (max-width: 425px) {
    flex-direction: column;
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      flex: 0 0 auto;
    }

    ${props => props.right && css`
      flex-direction: column-reverse;
      align-self: flex-start;
    `}
  }
`;