import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://64ac4c9c9edb4181202f6743.mockapi.io';

export const fetchContacts = createAsyncThunk("phonebook/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);

export const addContact = createAsyncThunk("phonebook/addContact",
  async ({ name, phone, id }, { rejectWithValue }) => {
    try {
      const contacts = await axios.post('/contacts', { name, phone, id });
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);

export const deleteContact = createAsyncThunk("phonebook/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      return contacts.data;
    } catch (error) {
      throw rejectWithValue(error);
    };
  }
);
