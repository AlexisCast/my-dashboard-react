import { useEffect, useState } from 'react';
import { PokemonGrid } from '../../Components/Pokemons';

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const getPokemons = async (limit = 20, offset = 0) => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      ).then((res) => res.json());

      const pokemons = data.results.map((pokemon) => ({
        id: String(pokemon.url.split('/').at(-2)),
        name: pokemon.name
      }));

      setPokemons(pokemons);
    };

    getPokemons();
  }, []);

  if (!pokemons) {
    console.log('no');
    return <div>No records</div>;
  }
  return (
    <div className="flex flex-col">
      <h1>Pokemon List</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default Pokemons;
