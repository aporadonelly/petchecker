import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectToken, selectUser } from '@/redux/auth/slice';

export function useAuth() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  return useMemo(() => ({ token, user }), [token, user]);
}
