import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppRouter } from '../../router/AppRouter';
import { RouterProvider } from 'react-router-dom';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Browser router */}
      <RouterProvider router={AppRouter} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
