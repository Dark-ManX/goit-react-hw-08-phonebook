// import { createAction, createReducer } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => (state = payload),
  },
});

export const { setFilter } = filter.actions;
export default filter.reducer;

// export const setFilter = createAction('filter');

// const filter = createReducer('', {
//   setFilter: (state, { payload }) => (state.filter = payload),
// });

// export default filter;
