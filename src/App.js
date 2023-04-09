import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        initialIsOpen={false}
        position={'top-right'}
        panelPosition={'right'}
      />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
