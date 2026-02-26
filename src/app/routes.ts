import { createBrowserRouter } from 'react-router';
import Home from './pages/home';
import CustomFormPage from './pages/custom-form';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/custom-request',
    Component: CustomFormPage,
  },
]);
