import { nanoid } from 'nanoid';


const FilteredContacts = ({ filterContacts, removeContact }) => {
  return (
    <ul className="section-body__contacts-list">
      {filterContacts.map((contact, index) => (
        <li
          className="section-body__contacts-list__item"
          id={index}
          key={nanoid(7)}
        >
          {contact.name}: {contact.number}
          <button className="section-body__contacts-list__item__remove-contact__button" onClick={removeContact}
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
