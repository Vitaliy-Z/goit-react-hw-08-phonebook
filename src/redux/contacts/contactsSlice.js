import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const initialState = {
  allContacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.pending](state) {
      state.isLoading = !initialState.isLoading;
    },
    [contactsOperations.getAllContacts.fulfilled](state, action) {
      state.allContacts = action.payload;
      state.isLoading = initialState.isLoading;
    },

    [contactsOperations.addContact.pending](state) {
      state.isLoading = !initialState.isLoading;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.allContacts.push(action.payload);
      state.isLoading = initialState.isLoading;
    },

    [contactsOperations.deleteContact.pending](state) {
      state.isLoading = !initialState.isLoading;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      const newContacts = state.allContacts.filter(
        ({ id }) => id !== action.payload,
      );
      state.allContacts = newContacts;
      state.isLoading = initialState.isLoading;
    },

    [contactsOperations.updateContact.pending](state) {
      state.isLoading = !initialState.isLoading;
    },
    [contactsOperations.updateContact.fulfilled](state, action) {
      const changeContact = (contact, newContact) => {
        if (contact.id === newContact.id) {
          return newContact;
        }
        return contact;
      };

      const newAllContacts = state.allContacts.map(contact =>
        changeContact(contact, action.payload),
      );

      state.allContacts = newAllContacts;
      state.isLoading = initialState.isLoading;
    },
  },
});

export default contactsSlice.reducer;
