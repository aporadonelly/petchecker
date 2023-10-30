import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '@/redux/store';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const token = state.auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery: baseQuery,
  tagTypes: [
    'User',
    'Pet',
    'Vet',
    'Animal',
    'AnimalSpecies',
    'AnimalBreed',
    'Category',
    'Plan',
    'Consultation',
  ],
  endpoints: () => ({}),
});
