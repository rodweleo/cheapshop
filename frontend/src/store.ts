import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slices/cartSlice"
import { loadReduxState, saveReduxState } from './localStorage';

const preloadedState = loadReduxState()

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveReduxState(store.getState().cart);
});


export default store;