import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppRouter } from '../../router/AppRouter';
import { RouterProvider } from 'react-router-dom';
import { CartContextProvider } from '../../contexts/cart/cart-context';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        {/* Browser router */}
        <RouterProvider router={AppRouter} />
      </CartContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
