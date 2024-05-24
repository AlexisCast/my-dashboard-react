import { PokemonCard } from './PokemonCard';

export const PokemonGrid = ({ pokemons }) => {
  console.log({ pokemons });
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};
