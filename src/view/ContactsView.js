import { useState } from 'react';
import ContactForm from '../components/contactForm/contactForm';
import ContactList from '../components/contactList/contactList';

import ModalEdition from '../components/modal/modal';
import ContactEditor from '../components/contactEditor/contactEditor';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function ContactsView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idForUpdate, setIdForUpdate] = useState('');

  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        This is PHONEBOOK PAGE{' '}
        <span role="img" aria-label="Hello">
          💁‍♀️
        </span>
      </h1>
      <br />

      <ContactForm />
      <br />

      <ContactList openModal={toggleModal} getId={setIdForUpdate} />
      {isModalOpen && (
        <ModalEdition showModal={isModalOpen} onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} idForUpdate={idForUpdate} />
        </ModalEdition>
      )}
    </div>
  );
}
