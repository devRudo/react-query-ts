import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
