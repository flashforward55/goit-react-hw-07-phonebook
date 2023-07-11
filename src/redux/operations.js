import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    };
  }
);

export const addContact = createAsyncThunk("contacts/addContact",
  async ({ name, phone, id }, thunkApi) => {
    try {
      const contacts = await axios.post('/contacts', { name, phone, id });
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    };
  }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
  async (id, thunkApi) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    };
  }
);
