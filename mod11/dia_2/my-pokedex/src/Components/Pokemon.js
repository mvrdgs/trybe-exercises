import React from 'react';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    return (
      <section className='card'>
        <p>Name: { this.props.pokemon.name }</p>
        <p>Type: { this.props.pokemon.type }</p>
        <p>Weigth: { this.props.pokemon.averageWeight.value } { this.props.pokemon.averageWeight.measurementUnit }</p>
        <img src={ this.props.pokemon.image } alt="Pokemon" />
      </section>
    )
  }
}

export default Pokemon;
