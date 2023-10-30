import { createBrowserRouter, Navigate } from 'react-router-dom';

import RootLayout from '@/layouts/root';
import PetOwnerLayout from '@/layouts/pet-owner';
import AuthLayout from '@/layouts/auth';

import petOwnerRoutes from './pet-owner';
import authRoutes from './auth';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: 'pet-owner/*',
        element: <PetOwnerLayout />,
        children: petOwnerRoutes,
      },
      {
        path: 'auth/*',
        element: <AuthLayout />,
        children: authRoutes,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="pet-owner" replace />,
  },
]);

export default router;
