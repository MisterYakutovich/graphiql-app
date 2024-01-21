import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  variablesGraphql: string;
}

const initialState: CounterState = {
  variablesGraphql: '',
};

export const variablesSlice = createSlice({
  name: 'variablesGraphql',
  initialState,
  reducers: {
    setVariablesQraphql(state, action: PayloadAction<string>) {
      state.variablesGraphql = action.payload;
    },
  },
});

export const { setVariablesQraphql } = variablesSlice.actions;
export default variablesSlice.reducer;
