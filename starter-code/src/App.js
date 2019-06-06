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

import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pokemon: {},
      pokeId: 44,
      countries: []
    }
  }

  componentDidMount(){
    this.fetchCountries()
  }

  fetchCountries = () => {
    // axios.post(url, {data: 'bonjour'})
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeId}/`)
    .then(resp => {
      console.log(resp.data)
      this.setState({pokemon: resp.data})
    })
  }

  render() {
    return (
      <Container>
        {this.state.pokemon.species ? 
          (<Row>
            {this.state.pokemon.species.name}
            <img src={this.state.pokemon.sprites.front_default}/>
          </Row>) : ''}
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
