import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import Main from './Layout/Main';

const Queries = () => {
  const queryClient = useQueryClient();
  //   To subscribe to a query in your components or custom hooks, call the useQuery hook with at least:

  // A unique key for the query
  // A function that returns a promise that:
  // Resolves the data, or
  // Throws an error

  //   A query can only be in one of the following states at any given moment:

  // isLoading or status === 'loading' - The query has no data yet
  // isError or status === 'error' - The query encountered an error
  // isSuccess or status === 'success' - The query was successful and data is available
  const { isLoading, isError, error, data, isFetching, fetchStatus, status } =
    useQuery({
      queryKey: ['todos'], // The unique key you provide is used internally for refetching, caching, and sharing your queries throughout your application. https://tkdodo.eu/blog/effective-react-query-keys
      // refetchOnWindowFocus: false, //Window Focus Refetching turned off
      // enabled: false, // Disabling/Pausing Queries
      // retry: 10, // Will retry failed requests 10 times before displaying an error
      queryFn: () =>
        axios
          .get('https://jsonplaceholder.typicode.com/todos')
          .then((res) => res.data),
    }); // A query function can be literally any function that returns a promise. The promise that is returned should either resolve the data or throw an error.
  //Query keys are not just for uniquely identifying the data you are fetching, but are also conveniently passed into your query function as part of the QueryFunctionContext. While not always necessary, this makes it possible to extract your query functions if needed:
  // function Todos({ status, page }) {
  //   const result = useQuery({
  //     queryKey: ['todos', { status, page }],
  //     queryFn: fetchTodoList,
  //   })
  // }

  //QueryFunctionContext
  // The QueryFunctionContext is the object passed to each query function. It consists of:

  // queryKey: QueryKey: Query Keys
  // pageParam?: unknown
  // only for Infinite Queries
  // the page parameter used to fetch the current page
  // signal?: AbortSignal
  // AbortSignal instance provided by TanStack Query
  // Can be used for Query Cancellation
  // meta: Record<string, unknown> | undefined
  // an optional field you can fill with additional information about your query

  //   FetchStatus
  // In addition to the status field, the result object, you will also get an additional fetchStatusproperty with the following options:

  // fetchStatus === 'fetching' - The query is currently fetching.
  // fetchStatus === 'paused' - The query wanted to fetch, but it is paused. Read more about this in the Network Mode guide.
  // fetchStatus === 'idle' - The query is not doing anything at the moment.

  // So keep in mind that a query can be in loading state without actually fetching data. As a rule of thumb:

  // The status gives information about the data: Do we have any or not?
  // The fetchStatus gives information about the queryFn: Is it running or not?

  // const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: ()=>{
  //         queryClient.invalidateQueries({queryKey: ['todos']})
  //     }
  // })

  console.log('status', status);
  console.log('fetchStatus', fetchStatus);
  console.log('error', error);
  console.log('data', data);

  if (isLoading) return 'Loading ....';
  if (error) return 'An error occurred. Please try again ....';

  return (
    <Main>
      <h1>{isFetching ? 'Updating...' : ''}</h1>
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      {/* <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button> */}
    </Main>
  );
};

export default Queries;
