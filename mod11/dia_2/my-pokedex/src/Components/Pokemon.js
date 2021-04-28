import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <section className='card'>
        <p>Name: { this.props.pokemon.name }</p>
        <p>Type: { this.props.pokemon.type }</p>
        <p>Weigth: { this.props.pokemon.averageWeight.value } { this.props.pokemon.averageWeight.measurementUnit }</p>
        <img src={ this.props.pokemon.image } alt="Pokemon" />
      </section>
    );
  };
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    avarageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }),
};


export default Pokemon;
