import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const styles = {
  form: {
    display: 'inline-block',
    padding: 12,
    fontWeight: 700,
  },
};

function ContactForm() {
  const allContacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    name === '' || number === ''
      ? alert('PLEASE, ENTER NAME OR TELEPHONE NUMBER')
      : allContacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
      ? alert(name + ' is already in contacts')
      : dispatch(contactsOperations.addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label className="label">
        Name
        <input
          // className="input inputName"
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Number
        <input
          // className="input"
          name="number"
          type="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button className="btnAdd" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
