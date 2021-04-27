import Pokemon from './Components/Pokemon';
import './App.css';
import Pokemons from './Data';

function App() {
  return (
    <section className='container'>
      { Pokemons.map((pokemon) => <Pokemon pokemon={ pokemon } /> )}
    </section>
  );
}

export default App;
