import { Link } from 'react-router-dom';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonCard = ({ pokemon }) => {
  const { id, name } = pokemon;

  return (
    <div className="right-0 mx-auto mt-2 w-60">
      <div className="flex flex-col overflow-hidden rounded bg-white shadow-lg">
        <div className="flex flex-col items-center justify-center border-b bg-gray-800 p-6 text-center">
          <img
            className="h-24 w-24"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.id}
          />
          <p className="pt-2 text-lg font-semibold capitalize text-gray-50">{name}</p>
          <p className="text-sm text-gray-100">John@Doe.com</p>
          <div className="mt-5">
            <Link
              className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
              href={`/dashboard/pokemon/${id}`}>
              More Information
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link className="flex items-center px-4 py-2 hover:bg-gray-100" href="/dashboard/main">
            <div className="text-red-600">
              <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium leading-none text-gray-800">Not is favorite</p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
