import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const style = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #39c4ef',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
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
      : allContacts.find(contact =>
          contact.name.toLowerCase() === name.toLowerCase()
            ? alert(name + ' is already in contacts')
            : dispatch(contactsOperations.addContact({ name, number })),
        );

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} style={style.container}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name of new contact"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
        <Form.Text className="text-muted">
          Please enter the name of which is not in your phone book
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicNumber" autoComplete="off">
        <Form.Label>Telephone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter telephone number of new contact "
          name="number"
          value={number}
          onChange={handleChange}
          autoComplete="off"
        />
      </Form.Group>

      <Button variant="primary" size="lg" type="submit">
        Add contact
      </Button>
    </Form>
  );
}

export default ContactForm;
