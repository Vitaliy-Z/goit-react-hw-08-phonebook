import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';

import styles from './contactEditor.module.css';

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
    <form className={styles.editor} onSubmit={handleSubmit} autoComplete="off">
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
        Update contact
      </button>
    </form>
  );
}

// class TodoEditor extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.message !== '') {
//       this.props.onSubmit(this.state.message);
//       this.props.onSave();
//       this.setState({ message: '' });
//       return;
//     }

//     alert('Заполни текст заметки.');
//   };

//   render() {
//     return (
//       <form className={styles.editor} onSubmit={this.handleSubmit}>
//         <textarea
//           className={styles.textarea}
//           value={this.state.message}
//           onChange={this.handleChange}
//         ></textarea>
//         <button type="submit" className={styles.button}>
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }
