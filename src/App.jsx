import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Error } from './routes/root/Error/Error';
import Users from './routes/User/Users';
import { RootLayout } from './routes/root/Root/Root';
import Counter from './routes/Counter/Counter';
import Pokemons from './routes/Pokemons/Pokemons';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1 className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
              Hello world!
            </h1>
          </div>
        )
      },
      {
        path: 'counter',
        element: <Counter />
      },
      {
        path: 'users',
        element: (
          <div>
            <Users />
          </div>
        )
      },
      {
        path: 'pokemons',
        element: <Pokemons />
      },
      {
        path: 'bye',
        element: (
          <div>
            <h1 className="bg-red-700 px-4 py-2 text-white hover:bg-red-800 sm:px-8 sm:py-3">
              Bye world!
            </h1>
          </div>
        )
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
