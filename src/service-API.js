import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export async function fetchAllContactsAPI() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function addContactsAPI(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}

export async function deleteContactsAPI(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

// export async function fetchBooks() {
//   const { data } = await axios.get(`/books`);
//   return data;
// }

// export async function fetchBookById(bookId) {
//   const { data } = await axios.get(`/books/${bookId}?_expand=author`);
//   return data;
// }
