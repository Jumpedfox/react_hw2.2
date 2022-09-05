import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  filterContacts,
  findContact,
} from './actions';

export default createReducer([], {
  [addContact]: (state, action) => {
    state.push(action.payload);
    localStorage.setItem('contacts', JSON.stringify(state));
    state.splice(0, state.length);
    state.push(...JSON.parse(localStorage.getItem('contacts')));
  },

  [removeContact]: (state, action) => {
    state.splice(0, state.length);
    state.push(...action.payload);
    localStorage.setItem('contacts', JSON.stringify(state));
  },

  [filterContacts]: (state, action) => {
    state.splice(0, state.length);
    state.push(...action.payload);
  },

  [findContact]: (state, action) => {
    state.splice(0, state.length);
    state.push(...action.payload);
  },
});
