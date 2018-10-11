import React from 'react';
import ContactPreview from '../ContactPreview/ContactPreview'
import { Link } from 'react-router-dom';
import { observable, computed } from 'mobx';

import './ContactList.css';


const remove = (onRemoveContact,contactId) => {
  onRemoveContact(contactId);
};

const ContactList = (props) => {

  const contactsPreview = props.contacts.map((contact, i) => {
    return (
      <li key={contact._id} className="contacts-list-item">
        <Link to={`/contact/${contact._id}`}><ContactPreview contact={contact} onRemove={contactId => remove(props.onRemoveContact,contactId)} /></Link>
      </li>
    )
  });

  return (
    <div className="contacts-list">
      <ul>
        {contactsPreview}
        <li className="add-contact-button">
          <Link to={`/contact/edit/`}>+</Link>
        </li>
      </ul>
    </div>
  );
}

export default ContactList;
