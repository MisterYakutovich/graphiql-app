import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  apiUrl: string;
}

const initialState: CounterState = {
  apiUrl: '',
};

export const endpointSlice = createSlice({
  name: 'endpoint',
  initialState,
  reducers: {
    setApiEndpoint(state, action: PayloadAction<string>) {
      state.apiUrl = action.payload;
    },
  },
});

export const { setApiEndpoint } = endpointSlice.actions;
export default endpointSlice.reducer;
