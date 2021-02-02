import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactEditor({ onSave, idForUpdate }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

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

  const handleSubmit = e => {
    e.preventDefault();

    const credentials = { name, number };

    name === '' || number === ''
      ? alert('PLEASE, ENTER NAME AND NUMBER')
      : dispatch(
          contactsOperations.updateContact({ idForUpdate, credentials }),
        );
    onSave();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName" autoComplete="off">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter new name"
          name="name"
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
        <Form.Text className="text-muted">
          Please enter the new name of this contact
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
      <Button variant="success" size="lg" type="submit">
        Update contact
      </Button>
    </Form>
  );
}
