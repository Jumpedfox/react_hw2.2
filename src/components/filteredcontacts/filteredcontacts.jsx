import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { nanoid } from 'nanoid';
import './filteredcontacts.scss';

const FilteredContacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);

  const handleClick = e => {
    const id = contacts.indexOf(contacts[Number([e.target.id])]);
    const filteredContacts = contacts.filter(
      contact => contacts.indexOf(contact) !== id
    );
    dispatch(actions.removeContact(filteredContacts));
  };

  useEffect(() => {
    localStorage.getItem('contacts') === null
      ? dispatch(
          actions.filterContacts(JSON.parse(localStorage.getItem('contacts')))
        )
      : dispatch(
          actions.filterContacts(JSON.parse(localStorage.getItem('contacts')))
        );
  }, []);

  return (
    <ul className="contacts-list">
      {contacts.map((contact, index) => (
        <li className="contacts-list__item" id={index} key={nanoid(7)}>
          {contact.name}: {contact.number}
          <button
            className="contacts-list__item__remove-contact-button"
            onClick={e => handleClick(e)}
            id={index}
          >
            REMOVE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FilteredContacts;
