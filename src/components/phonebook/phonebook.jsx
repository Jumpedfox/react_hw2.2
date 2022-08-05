import React, { Component } from 'react';
import '../phonebook/phonebook.scss';
import FilteredContacts from '../filteredcontacts/filteredcontacts';
import SectionHeader from 'components/sectionheader/sectionheader';
import SectionBody from 'components/sectionbody/sectionbody';

class Phonebook extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
    number: '',
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  render() {
    const addContact = () => {
      const inputName = document.getElementById('input-name');
      const inputNum = document.getElementById('input-num');
      const contactsArray = this.state.contacts;
      if (
        !this.state.contacts.some(contact => contact.name === inputName.value)
      ) {
        contactsArray.push({ name: inputName.value, number: inputNum.value });
      } else {
        alert(inputName.value + 'is already in contacts');
      }
      this.setState({ contacts: [...contactsArray] });
    };

    const removeContact = e => {
      const id = Number(e.target.id);
      this.setState({
        contacts: this.state.contacts.filter(
          contact => this.state.contacts.indexOf(contact) !== id
        ),
      });
    };

    const getName = e => {
      this.setState({ filter: e.target.value });
      filterContacts();
    };

    const filterContacts = () => {
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    };

    return (
      <section className="section">
        <div className="section-header">
          <h2>PHONEBOOK</h2>
          <SectionHeader
            addContact={addContact}
            filterContacts={filterContacts()}
          />
        </div>
        <div className="section-body">
          <h2>CONTACTS</h2>
          <SectionBody getName={getName} />
          <FilteredContacts
            filterContacts={filterContacts()}
            removeContact={removeContact}
          />
        </div>
      </section>
    );
  }
}

export { Phonebook };
