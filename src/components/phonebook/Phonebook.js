import React, { Component } from 'react';
import SectionAddContacts from '../section/SectionAddContacts';
import SectionList from '../section/SectionList';
import AddContacts from '../addContacts/AddContacts';
import ContactsList from '../contactsList/ContactsList';

export class Phonebook extends Component {
  state = {};
  render() {
    return (
      <>
        <SectionAddContacts title="Phonebook">
          <AddContacts />
        </SectionAddContacts>
        <SectionList title="Contacts">
          <ContactsList />
        </SectionList>
      </>
    );
  }
}

export default Phonebook;
