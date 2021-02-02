import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const getAllContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/update',
  async ({ idForUpdate, credentials }, { rejectWithValue }) => {
    try {
      const id = idForUpdate;
      const { data } = await axios.patch(`/contacts/${id}`, credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const contactsOperations = {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
};

export default contactsOperations;
