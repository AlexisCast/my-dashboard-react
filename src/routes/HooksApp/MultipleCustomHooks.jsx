import React from 'react';
import { useCounter, useFetch } from '../../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasHerror, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <h2>Pokemon Information</h2>

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny
          ]}
        />
      )}

      <p>{hasHerror?.hasHerror}</p>

      <button className="m-2" onClick={() => (counter > 1 ? decrement() : null)}>
        Previous
      </button>
      <button className="m-2" onClick={() => increment()}>
        Next
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
};
