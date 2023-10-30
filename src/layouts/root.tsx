import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/redux/hooks/use-auth';

function RootLayout() {
  const location = useLocation();
  const auth = useAuth();

  const isIndexRoute = /^\/index$|^\/$/.test(location.pathname);
  const isRestrictedRoute = /^\/(pet-owner|vet).*/.test(location.pathname);

  if (isIndexRoute) {
    return <Navigate to="/pet-owner" replace />;
  } else if (isRestrictedRoute && !auth.token) {
    return <Navigate to="/auth/login" state={{ from: location }} />;
  } else if (!isRestrictedRoute && auth.token) {
    return <Navigate to="/" state={{ from: location }} />;
  } else {
    return <Outlet />;
  }
}

export default RootLayout;
