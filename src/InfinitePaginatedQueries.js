// Rendering paginated data is a very common UI pattern and in TanStack Query, it "just works" by including the page information in the query key:

// tsx
// const result = useQuery({
//   queryKey: ['projects', page],
//   queryFn: fetchProjects
// })
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Main from './Layout/Main';

const InfinitePaginatedQueries = () => {
  //   const queryClient = useQueryClient();
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchStatus,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get(
          `https://6432bf47d0127730d2d9136c.mockapi.io/api/users?page=${pageParam}&limit=10`,
        )
        .then((res) => res.data),
    getNextPageParam: (lastPage, pages) => {
      // console.log(lastPage, pages);
      return pages?.length + 1;
    },
    // keepPreviousData: true,
  });

  // useEffect(() => {
  //   refetch();
  // }, [page]);
  // console.log(isFetchingNextPage);

  return (
    <Main>
      {isFetching && <p>Updating ...</p>}
      <ul>
        {data?.pages?.map((page, i) => (
          <React.Fragment key={i}>
            {page?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : data?.pages?.length < 5
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
    </Main>
  );
};

export default InfinitePaginatedQueries;
