import React from 'react';
import { useFetch } from '../../hooks';

export const MultipleCustomHooks = () => {
  const { data, hasHerror, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/1`);
  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <h2>Pokemon Information</h2>

      {isLoading && <p>Loading...</p>}

      <h2>Name:{data?.name}</h2>
      <p>{hasHerror?.hasHerror}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};
