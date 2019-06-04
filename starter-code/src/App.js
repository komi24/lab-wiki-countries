import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './countries.json';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="App">
          <Col xs={3} md={3}>
          <Navbar countries={countries}/>
          </Col>
          <Col xs={9} md={9}>
          <Switch>
            <Route exact path='/:country' component={Profile}/>
          </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
