import React from 'react';
import { useQuery } from 'react-query';

const Example_2 = () => {

    const { status, data: todos, error, isFetching } = useQuery('todos', fetchTodos);

    return status === 'loading' ? (
        <span>Loading...</span>
    ) : status === 'error' ? (
        <span>Error: {error.message}</span>
    ) : (
        <>
            {isFetching ? <div>Refreshing...</div> : null}

            <div>
                {todos.map(el => <Todo todo={el}></Todo>)}
            </div>
        </>
    )
}

export default Example_2;