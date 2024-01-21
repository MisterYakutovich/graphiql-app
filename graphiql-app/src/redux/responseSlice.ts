import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  responseGraphql: string | null;
}

const initialState: CounterState = {
  responseGraphql: '',
};

export const querySlice = createSlice({
  name: 'responseGraphql',
  initialState,
  reducers: {
    setResponseQraphql(state, action: PayloadAction<string | null>) {
      state.responseGraphql = action.payload;
    },
  },
});

export const { setResponseQraphql } = querySlice.actions;
export default querySlice.reducer;
