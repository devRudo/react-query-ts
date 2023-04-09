// Rendering paginated data is a very common UI pattern and in TanStack Query, it "just works" by including the page information in the query key:

// tsx
// const result = useQuery({
//   queryKey: ['projects', page],
//   queryFn: fetchProjects
// })
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from './Layout/Main';

const PaginatedQueries = () => {
  //   const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    fetchStatus,
    status,
    refetch,
  } = useQuery({
    queryKey: ['users', page],
    queryFn: () =>
      axios
        .get(
          `https://6432bf47d0127730d2d9136c.mockapi.io/api/users?page=${page}&limit=10`,
        )
        .then((res) => res.data),
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <Main>
      {isFetching && <p>Updating ...</p>}
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          style={{
            background: '#d3d3d3',
            borderRadius: 5,
            margin: 5,
          }}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          style={{
            background: '#d3d3d3',
            borderRadius: 5,
            margin: 5,
          }}
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button
          style={{
            background: '#d3d3d3',
            borderRadius: 5,
            margin: 5,
          }}
          onClick={() => setPage(3)}
        >
          3
        </button>
        <button
          style={{
            background: '#d3d3d3',
            borderRadius: 5,
            margin: 5,
          }}
          onClick={() => setPage(4)}
        >
          4
        </button>
        <button
          style={{
            background: '#d3d3d3',
            borderRadius: 5,
            margin: 5,
          }}
          onClick={() => setPage(5)}
        >
          5
        </button>
      </div>
    </Main>
  );
};

export default PaginatedQueries;
