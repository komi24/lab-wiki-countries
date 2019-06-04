import React, { Component } from 'react';
import countries from '../countries.json'
import Container from 'react-bootstrap/Container';


const Profile = (props) => {
  let country = countries.filter(c => c.cca3 == props.match.params.country)
  console.log(country)
  country = country.length ? country[0] : ''

  return country ? (
    <Container>
      <h1>{country.name.common}</h1>
      <h4>Capital : {country.capital.map(cap => (<li>{cap}</li>))}</h4>
      <h4>Borders : {country.borders.map(border => (<li>{border}</li>))}</h4>
    </Container>
    ) : ""
}


export default Profile;