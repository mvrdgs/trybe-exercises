import Pokemon from './Components/Pokemon';
import './App.css';
import Pokemons from './Data';

function App() {
  return (
    <section className='container'>
      { Pokemons.map((pokemon, index) => <Pokemon key={ index } pokemon={ pokemon } /> )}
    </section>
  );
}

export default App;
