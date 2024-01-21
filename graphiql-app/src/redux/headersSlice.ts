import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  headersGraphql: string;
}

const initialState: CounterState = {
  headersGraphql: '',
};

export const headersSlice = createSlice({
  name: 'headersGraphql',
  initialState,
  reducers: {
    setHeadersQraphql(state, action: PayloadAction<string>) {
      state.headersGraphql = action.payload;
    },
  },
});

export const { setHeadersQraphql } = headersSlice.actions;
export default headersSlice.reducer;
