import PetOwnerProfileLayout from '@/layouts/pet-owner/profile';
import petOwnerProfileRoutes from './profile';

const petOwnerRoutes = [
  {
    index: true,
    lazy: () => import('@/pages/pet-ower'),
  },
  {
    path: 'profile/*',
    element: <PetOwnerProfileLayout />,
    children: petOwnerProfileRoutes,
  },
];

export default petOwnerRoutes;
