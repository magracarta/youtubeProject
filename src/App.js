import React from 'react';
import { Outlet } from 'react-router';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApliContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <SearchHeader/>
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet/>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;