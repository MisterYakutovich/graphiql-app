import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  queryGraphql: string;
}

const initialState: CounterState = {
  queryGraphql: '',
};

export const querySlice = createSlice({
  name: 'queryGraphql',
  initialState,
  reducers: {
    setQueryQraphql(state, action: PayloadAction<string>) {
      state.queryGraphql = action.payload;
    },
  },
});

export const { setQueryQraphql } = querySlice.actions;
export default querySlice.reducer;
