import { configureStore } from '@reduxjs/toolkit';
import stateEndpoint from './endpointSlice';
import stateQuery from './querySlice';
import stateResponse from './responseSlice';
import stateVariables from './variablesSlice';
import stateHeaders from './headersSlice';

export const store = configureStore({
  reducer: {
    endpointExecute: stateEndpoint,
    queryEndpoint: stateQuery,
    responseEndpoint: stateResponse,
    variablesEndpoint: stateVariables,
    headersEndpoint: stateHeaders,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
