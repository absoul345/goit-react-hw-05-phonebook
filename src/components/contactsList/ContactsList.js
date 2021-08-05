import React from 'react';
import Filter from './filter/Filter';
import ContactsItem from './contactsItem/ContactsItem';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import { connect } from 'react-redux';

const ContactsList = ({ contacts, filter, changeFilter, onDeleteContact }) => (
  <>
    <Filter value={filter} changeFilter={changeFilter} />
    <ul>
      {contacts.map(contact => (
        <ContactsItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  </>
);

const getFilterContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneBookActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
