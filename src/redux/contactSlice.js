import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const contactSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: init,
    filter: '',
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
    filterContact: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const contactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
export const { addContact, deleteContact, filterContact } =
  contactSlice.actions;
