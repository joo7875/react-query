import React from 'react';
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from 'react-query';

// create a client
const queryClient = new QueryClient();

const Todo = () => {
    // access the client
    const queryClient = useQueryClient();

    // queries
    const query = useQuery('todos', getTodos);

    // mutations
    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            // invalidate and refetch
            queryClient.invalidateQueries('todos');
        }
    })

    return (
        <div>
            <ul>
                {query.data.map(el => <li key={el.id}>{el.title}</li>)}
            </ul>
            <button onClick={() => { mutation.mutate({ id: Date.now(), title: 'Do laundry' }) }}>Add Todo</button>
        </div>
    )
}

const Example_1 = () => {
    return (
        // provide the client to your app
        <QueryClientProvider client={queryClient}>
            <Todo />
        </QueryClientProvider>
    )
}

export default Example_1;