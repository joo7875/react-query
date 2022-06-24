import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = () => {

  const queryClient = new QueryClient();

  const getAPI = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
    const data = await res.json();

    return data;
  }

  const Users = () => {
    const query = useQuery('users', getAPI);
    console.log(query);

    return (
      <ul>
        {
          !query.isLoading && (
            query.data.results.map((el, id) => (
              <li key={id}>{el.name} {el.url}</li>
            ))
          )
        }
      </ul>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Users />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;