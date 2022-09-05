import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducer';

const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
