import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ff71d634344b6431f996b1.mockapi.io',
  }),
  tagTypes: ['Contacts'],

  endpoints: build => ({
    getContacts: build.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),

    addContact: build.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: newContact,
      }),
      transformResponse: (response, meta, arg) => response.data,

      invalidatesTags: ['Contacts'],
    }),

    deleteContact: build.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsAPI;
