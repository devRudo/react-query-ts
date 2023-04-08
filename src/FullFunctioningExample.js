import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';

const FullFunctioningExample = () => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.data),
  });
  // const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: ()=>{
  //         queryClient.invalidateQueries({queryKey: ['todos']})
  //     }
  // })

  if (isLoading) return 'Loading ....';
  if (error) return 'An error occurred. Please try again ....';

  return (
    <div>
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
    </div>
  );
};

export default FullFunctioningExample;
