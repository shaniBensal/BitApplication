import React, { Component } from 'react';
import ContactFilter from '../../components/ContactFilter/ContactFilter'
import ContactList from '../../components/ContactList/ContactList'

import './ContactPage.css'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
export default class ContactPage extends Component {
  contactStore = this.props.store.contactStore;

  componentDidMount() {
    this.contactStore.getContacts();
  }

  filterContactList(str) {
    this.contactStore.getContacts(str);
  }

  removeContact(contactId){
    this.contactStore.removeContact(contactId);
  }

  render() {
    const { contacts } = this.contactStore;
    return (
      <React.Fragment>
        <div className="contacts-container">
          <ContactFilter onFilter={str => this.filterContactList(str)} />
          <ContactList contacts={contacts} onRemoveContact={contactId => this.removeContact(contactId)} />
        </div>
      </React.Fragment>
    );
  }
}

