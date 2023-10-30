const authRoutes = [
  {
    path: 'forgot-password',
    lazy: () => import('@/pages/auth/forgot-password'),
  },
  {
    path: 'login',
    lazy: () => import('@/pages/auth/login'),
  },
  {
    path: 'register',
    lazy: () => import('@/pages/auth/register'),
  },
  {
    path: 'reset-password',
    lazy: () => import('@/pages/auth/reset-password'),
  },
  {
    path: 'verify-email',
    lazy: () => import('@/pages/auth/verify-email'),
  },
];

export default authRoutes;
