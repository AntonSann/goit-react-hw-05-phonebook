import React from 'react';
import { connect } from 'react-redux';
import ContactListStyle from "./ContactList.module.css";
import contactsActions from '../../Redux/Contacts/contacts-action';

const ContactList = ({contacts, onDeleteContact}) =>(
    <ul>
        {contacts.map(contact => 
        <li key={contact.id}>
        {contact.name + ": " + contact.number}
        {
          <button
          className={ContactListStyle.button_delete}
            type="button"
            name="delete"
            onClick={()=>onDeleteContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>)}
    </ul>
    )

    const getVisibleContacts = (allContacts, filter) => {
      const normalizedFilter = filter.toLowerCase();
    
      return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
      );
    };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
}); 

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);