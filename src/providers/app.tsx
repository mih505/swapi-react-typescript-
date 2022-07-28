import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib/query-client";
import { BrowserRouter as Router } from 'react-router-dom';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <Router>{children}</Router>
      </QueryClientProvider>
    </React.Suspense>
  );
};

export default AppProvider;
