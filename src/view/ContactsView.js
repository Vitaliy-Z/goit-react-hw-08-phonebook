import { useState } from 'react';
import ContactForm from '../components/contactForm/contactForm';
import ContactList from '../components/contactList/contactList';
import Modal from '../components/modal/modal';
import ContactEditor from '../components/contactEditor/contactEditor';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    padding: '10px',
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

  // const getId = contactId => {
  //   setIdForUpdate(contactId);
  // };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        This is PHONEBOOK PAGE{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
      <h1 className="title">phonebook</h1>
      <ContactForm />

      <h2 className="title-contacts">contacts</h2>
      <ContactList openModal={toggleModal} getId={setIdForUpdate} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <ContactEditor onSave={toggleModal} idForUpdate={idForUpdate} />
        </Modal>
      )}
    </div>
  );
}
