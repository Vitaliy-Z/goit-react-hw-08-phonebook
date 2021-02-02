import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const style = {
  contactItem: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    margin: '5px',
    borderRadius: '10px',
  },
  button: {
    margin: '10px',
  },
  text: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

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
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">
            Find contacts by name
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          autoComplete="off"
          placeholder="Enter name"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <br />
      {contacts.length === 0 ? (
        <p className="contact-item__text">
          There are no contacts on your list yet
        </p>
      ) : (
        <ListGroup>
          {contacts.map(item => (
            <ListGroup.Item
              key={item.id}
              style={style.contactItem}
              variant="info"
            >
              <span style={style.text}>
                {item.name} : {item.number}
              </span>
              <span>
                <Button
                  style={style.button}
                  variant="outline-primary"
                  type="button"
                  onClick={() => {
                    getId(item.id);
                    openModal();
                  }}
                >
                  Update
                </Button>
                <Button
                  style={style.button}
                  variant="outline-primary"
                  type="button"
                  onClick={() => {
                    dispatch(contactsOperations.deleteContact(item.id));
                  }}
                >
                  Delete
                </Button>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      {/* <ul className="contact-list">
        {contacts.length === 0 ? ( 
      //     <p className="contact-item__text">
      //       There are no contacts on your list yet
      //     </p>
      //   ) : (
      //     contacts.map(item => (
      //       <li className="contact-item" key={item.id}>
      //         <p className="contact-item__text">
      //           {item.name} :
      //           <span className="contact-item__number">{item.number}</span>
      //         </p>

      //         <Button
      //           variant="outline-primary"
      //           type="button"
      //           onClick={() => {
      //             getId(item.id);
      //             openModal();
      //           }}
      //         >
      //           Update
      //         </Button>

      //         <Button
      //           variant="outline-primary"
      //           type="button"
      //           onClick={() => {
      //             dispatch(contactsOperations.deleteContact(item.id));
      //           }}
      //         >
      //           Delete
      //         </Button>
      //       </li>
      //     ))
      //   )}
      // </ul>
            */}
    </>
  );
}

export default ContactList;
