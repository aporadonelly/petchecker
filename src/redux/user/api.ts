import { FetchBaseResult } from '@/schemas/api';
import { User } from '@/schemas/user';
import { api } from '@/redux/api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<FetchBaseResult<User>, void>({
      query: () => ({
        url: '/accounts/~',
        method: 'GET',
      }),
      providesTags: [
        {
          type: 'User',
          id: 'Profile',
        },
      ],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
