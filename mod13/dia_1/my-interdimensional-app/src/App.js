import React, { Component }from 'react';
import './App.css';

class App extends Component {
  state = {
      characters: [],
    }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({characters: data.results}, () => {
          console.log(this.state.characters)
        });
    })
  }

  componentDidMount() {
    this.fetchCharacters()
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
          <div className="body">
            { characters.map(({ name, image }) => {
              return (
                <div className="container" key={name}>
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                </div>
              )
            }) }
          </div>
        </h1>
      </div>
    );
  }
}

export default App;