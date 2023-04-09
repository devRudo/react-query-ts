import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import Main from './Layout/Main';

// Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects. For this purpose, TanStack Query exports a useMutation hook.
const Mutations = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    queryKey: ['todos'],
    queryFn: () =>
      axios
        .post(
          'https://jsonplaceholder.typicode.com/todos',
          {
            userId: 1,
            title: 'new todo',
            completed: false,
          },
          {
            params: {},
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          },
        )
        .then((res) => res.data),
  });
  // const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: ()=>{
  //         queryClient.invalidateQueries({queryKey: ['todos']})
  //     }
  // })

  // if (isLoading) return 'Loading ....';
  // if (error) return 'An error occurred. Please try again ....';

  return (
    <Main>
      {/* <ul>
        {data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}

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

export default Mutations;
