import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SearchBar from './pages/SearchBar';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [{ index: true, element: <SearchBar /> }],
  },
]);
