import { useDispatch, useSelector } from 'react-redux';
import FilteredContacts from '../filteredcontacts/filteredcontacts';
import * as actions from '../../redux/actions';
import './sectionbody.scss';

const SectionBody = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const findContact = e => {
    const foundContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    e.target.value !== ''
      ? dispatch(actions.findContact(foundContacts))
      : dispatch(
          actions.findContact(JSON.parse(localStorage.getItem('contacts')))
        );
  };

  return (
    <div className="section-body">
      <h2 className="section-body__name">CONTACTS</h2>
      <input
        className="section-body__input "
        id="input-filter"
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Find contact..."
        onChange={findContact}
      />
      <FilteredContacts />
    </div>
  );
};

export default SectionBody;
