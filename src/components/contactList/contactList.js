import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './contactList.css';

function ContactList({ openModal, getId }) {
  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch]);

  const filterContacts = (allContactsItems, filterItems) => {
    return allContactsItems.filter(contact =>
      contact.name.toLowerCase().includes(filterItems.toLowerCase()),
    );
  };

  const contacts = filterContacts(allContacts, filter);

  return (
    <>
      <label className="label">
        Find contacts by name
        <input
          className="input"
          name="filter"
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          autoComplete="off"
        ></input>
      </label>
      <ul className="contact-list">
        {contacts.length === 0 ? (
          <p className="contact-item__text">
            There are no contacts on your list yet
          </p>
        ) : (
          contacts.map(item => (
            <li className="contact-item" key={item.id}>
              <p className="contact-item__text">
                {item.name} :
                <span className="contact-item__number">{item.number}</span>
              </p>
              <button
                className="btnDelete"
                type="button"
                onClick={() => {
                  getId(item.id);
                  openModal();
                }}
              >
                Update
              </button>
              <button
                className="btnDelete"
                type="button"
                onClick={() => {
                  dispatch(contactsOperations.deleteContact(item.id));
                }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ContactList;
