import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import './sectionheader.scss';

const SectionHeader = () => {
  const dispatch = useDispatch();
  const inputNameRef = useRef(null);
  const inputNumRef = useRef(null);
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    e.preventDefault();
    // contacts.includes(contact => contact.number === state.number ? alert(123) : dispatch(actions.addContact(state)));
    // contacts.length === 0 && contacts.filter(contact => contact.number !== state.number && dispatch(actions.addContact(state)));
    // console.log(contacts.length);
    dispatch(actions.addContact(state))
  };

  return (
    <div className="section-header">
      <h2 className="section-header__name">PINK PHONEBOOK</h2>
      <form className="section-header__form" onSubmit={e => handleSubmit(e)}>
        <input
          ref={inputNameRef}
          className="section-header__form__input"
          id="input-name"
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name..."
          maxLength={18}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
        <input
          ref={inputNumRef}
          className="section-header__form__input"
          id="input-num"
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number..."
          maxLength={14}
          onChange={e => setState({ ...state, number: e.target.value })}
        />
        <button
          className="section-header__form__add-contact-button"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default SectionHeader;
