import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
