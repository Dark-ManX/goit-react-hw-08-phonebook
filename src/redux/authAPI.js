import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',

    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('Authorization', token);

      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    signUp: builder.mutation({
      query: payload => ({
        url: `/signup`,
        method: 'POST',
        body: payload,
      }),

      transformResponse: (response, meta, arg) => response.data,

      invalidatesTags: ['User'],
    }),

    logIn: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),

      invalidatesTags: ['User'],
    }),

    getCurrentUser: builder.query({
      query: () => '/current',
      providesTags: ['User'],
    }),

    logOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),

      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
  useGetCurrentUserQuery,
  useLogOutMutation,
} = authAPI;
