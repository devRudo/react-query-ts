# Getting Started with React Query

React Query will likely:

* Help you remove many lines of complicated and misunderstood code from your application and replace with just a handful of lines of React Query logic.
* Make your application more maintainable and easier to build new features without worrying about wiring up new server state data sources
* Have a direct impact on your end-users by making your application feel faster and more responsive than ever before.
* Potentially help you save on bandwidth and increase memory performance

Installation

```
npm i @tanstack/react-query
```

Requirements

```
Chrome >= 73
Firefox >= 78
Edge >= 79
Safari >= 12.0
iOS >= 12.0
opera >= 53
```
Quick Start

3 core concepts of react query
* Queries
* Mutations
* Query Validation

Dev Tools

```
npm i @tanstack/react-query-devtools
```

```
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
```

Comparison | React Query vs SWR vs Apollo vs RTK Query vs React Router
https://tanstack.com/query/latest/docs/react/comparison

Important Defaults

* Query instances via useQuery or useInfiniteQuery by default consider cached data as stale.
```
To change this behavior, you can configure your queries both globally and per-query using the staleTime option. Specifying a longer staleTime means queries will not refetch their data as often
```

* Stale queries are refetched automatically in the background when:
    * New instances of the query mount
    * The window is refocused
    * The network is reconnected
    * The query is optionally configured with a refetch interval

```
To change this functionality, you can use options like refetchOnMount, refetchOnWindowFocus, refetchOnReconnect and refetchInterval.
```

* Query results that have no more active instances of useQuery, useInfiniteQuery or query observers are labeled as "inactive" and remain in the cache in case they are used again at a later time.

* By default, "inactive" queries are garbage collected after 5 minutes.

```
To change this, you can alter the default cacheTime for queries to something other than 1000 * 60 * 5 milliseconds.
```
* Queries that fail are silently retried 3 times, with exponential backoff delay before capturing and displaying an error to the UI.

```
To change this, you can alter the default retry and retryDelay options for queries to something other than 3 and the default exponential backoff function.
```
* Query results by default are structurally shared to detect if data has actually changed and if not, the data reference remains unchanged to better help with value stabilization with regards to useMemo and useCallback. If this concept sounds foreign, then don't worry about it! 99.9% of the time you will not need to disable this and it makes your app more performant at zero cost to you.

Some important references

https://tkdodo.eu/blog/practical-react-query

https://tkdodo.eu/blog/react-query-as-a-state-manager

