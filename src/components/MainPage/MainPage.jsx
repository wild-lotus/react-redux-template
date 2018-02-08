// @flow

import * as React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import CounterContainer from './Counter/CounterContainer';
import RemoteContentContainer from './RemoteContent/RemoteContentContainer';
import DerivedDataContainer from './DerivedData/DerivedDataContainer';
import logo from 'images/logo.svg';

const StyledRoot = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  min-height: 100vh;
  overflow: hidden;
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: ${props => props.theme.mainColor};
  height: 150px;
  padding: 20px;
  color: white;
`;

const StyledLogoImg = styled.img`
  height: 80px;
`;

const StyledH1 = styled.h1`
  font-size: 1.5em;
`;

const StyledLink = styled(Link)`
  padding: 1em;
`;

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
  right: 0;
  bottom: 0;
`;

const StyledSampleContainer = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  padding: 15px;
  margin: 15px;
`;

export default function MainPage() {
  return (
    <Router>
      <StyledRoot>
        <StyledHeader>
          <StyledLogoImg src={logo} alt="logo" />
          <StyledH1> Welcome to the Front-end</StyledH1>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/counter">Counter</StyledLink>
            <StyledLink to="/remote-content">Remote content</StyledLink>
            <StyledLink to="/derived-data">Derived Data</StyledLink>
          </nav>
        </StyledHeader>
        <main>
          <StyledSampleContainer>
            <Switch>
              <Route path="/counter" component={CounterContainer} />
              <Route
                path="/remote-content"
                component={RemoteContentContainer}
              />
              <Route
                path="/derived-data"
                render={() => <DerivedDataContainer position={3} />}
              />
              <Route
                path="/ops"
                render={() => (
                  <iframe title="ops" src="http://localhost:3000" />
                )}
              />
              <Route render={() => <p>Select a sample from above!</p>} />
            </Switch>
          </StyledSampleContainer>
        </main>
        <StyledFooter>{process.env.REACT_APP_VERSION}</StyledFooter>
      </StyledRoot>
    </Router>
  );
}
